import { Matrix } from './matrix';

export interface Node {
    id: number;
    x: number;
    y: number;
    // Boundary conditions: true = fixed (constrained), false = free
    fixX: boolean;
    fixY: boolean;
    fixR: boolean; // Rotation
    // Loads applied directly to node
    loadX: number;
    loadY: number;
    moment: number;
}

export interface Element {
    id: number;
    node1: number; // Start Node ID
    node2: number; // End Node ID
    E: number; // Modulus
    A: number; // Area
    I: number; // Inertia
    // Distributed load (global Y) - simplistic for now
    w: number;
}

export interface SolverResult {
    displacements: Map<number, { u: number, v: number, r: number }>;
    reactions: Map<number, { rx: number, ry: number, m: number }>;
    maxDeflection: number;
}

export class FrameSolver2D {
    nodes: Node[];
    elements: Element[];
    dof: number; // Degrees of Freedom per node (3 for 2D frame: u, v, r)

    constructor(nodes: Node[], elements: Element[]) {
        this.nodes = nodes;
        this.elements = elements;
        this.dof = 3;
    }

    solve(): SolverResult {
        const nodeCount = this.nodes.length;
        const systemDof = nodeCount * this.dof;

        // 1. Initialize Global Stiffness Matrix K
        const K = Matrix.zeros(systemDof, systemDof);
        const F = new Array(systemDof).fill(0); // Load Vector

        // 2. Assemble System
        this.elements.forEach(el => {
            const n1 = this.nodes.find(n => n.id === el.node1)!;
            const n2 = this.nodes.find(n => n.id === el.node2)!;

            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const L = Math.sqrt(dx * dx + dy * dy);
            const c = dx / L; // cos
            const s = dy / L; // sin

            const { E, I, A } = el;

            // Element Stiffness in Local Coords (6x6)
            // k_local = [ ... ]
            // We transform directly to Global to save steps
            // But for clarity, let's construct explicit local then transform? 
            // Better: Use direct stiffness formulas for rotated element.

            // Re-using common terms
            const k1 = (E * A) / L;
            const k2 = (12 * E * I) / Math.pow(L, 3);
            const k3 = (6 * E * I) / Math.pow(L, 2);
            const k4 = (4 * E * I) / L;
            const k5 = (2 * E * I) / L;

            // Transformation Matrix T (6x6)
            // [ c  s  0  0  0  0]
            // [-s  c  0  0  0  0]
            // [ 0  0  1  0  0  0] ...

            // Actually, we can just assemble the 6x6 global matrix for the element directly
            // using the standard rotation formula.
            // Let's construct the 6x6 local k first.
            const kLocal = Matrix.zeros(6, 6);
            // Axial
            kLocal.set(0, 0, k1); kLocal.set(0, 3, -k1);
            kLocal.set(3, 0, -k1); kLocal.set(3, 3, k1);
            // Bending
            kLocal.set(1, 1, k2); kLocal.set(1, 2, k3); kLocal.set(1, 4, -k2); kLocal.set(1, 5, k3);
            kLocal.set(2, 1, k3); kLocal.set(2, 2, k4); kLocal.set(2, 4, -k3); kLocal.set(2, 5, k5);
            kLocal.set(4, 1, -k2); kLocal.set(4, 2, -k3); kLocal.set(4, 4, k2); kLocal.set(4, 5, -k3);
            kLocal.set(5, 1, k3); kLocal.set(5, 2, k5); kLocal.set(5, 4, -k3); kLocal.set(5, 5, k4);

            // Rotation Matrix T
            const T = Matrix.zeros(6, 6);
            T.set(0, 0, c); T.set(0, 1, s);
            T.set(1, 0, -s); T.set(1, 1, c);
            T.set(2, 2, 1);
            T.set(3, 3, c); T.set(3, 4, s);
            T.set(4, 3, -s); T.set(4, 4, c);
            T.set(5, 5, 1);

            // k_global = T_transpose * k_local * T
            // Note: Since T is orthogonal, T_inverse = T_transpose.
            // Valid formula: K_global = T^t * K_local * T

            // Manual T_transpose
            const T_t = Matrix.zeros(6, 6);
            for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) T_t.set(i, j, T.get(j, i));

            const K_global_el = T_t.multiply(kLocal).multiply(T);

            // Add to Global K
            // Map element indices (0-5) to system indices (0 to 3N)
            // Node 1 indices: id*3, id*3+1, id*3+2
            // We assume node IDs are 0 to N-1 for simplicity, 
            // if not we need a map. Let's assume passed nodes are sorted/mapped.
            // To be safe, we use index in 'nodes' array.
            const n1Idx = this.nodes.indexOf(n1);
            const n2Idx = this.nodes.indexOf(n2);

            const indices = [
                n1Idx * 3, n1Idx * 3 + 1, n1Idx * 3 + 2,
                n2Idx * 3, n2Idx * 3 + 1, n2Idx * 3 + 2
            ];

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    const globalRow = indices[i];
                    const globalCol = indices[j];
                    const val = K_global_el.get(i, j);
                    K.set(globalRow, globalCol, K.get(globalRow, globalCol) + val);
                }
            }

            // Distributed Load (Work Equivalent Loads at Fixed Ends)
            // w is in global Y (gravity).
            // Projected length L_projection = L * c? 
            // For now, simplify: Uniform load w on beam element along its global length.
            // FEM fixed end moments: wL^2/12. Vertical reaction: wL/2.
            // CAUTION: 'w' is usually local normal to beam. If w is Global Gravity, we must split components.
            // Load Vector F addition:
            // py = w * L / 2 (Global Y roughly)
            if (el.w !== 0) {
                // Simplified nodal lumping for gravity load
                // Half total weight to each node
                const totalLoad = el.w * L; // N
                F[n1Idx * 3 + 1] -= totalLoad / 2; // -Y
                F[n2Idx * 3 + 1] -= totalLoad / 2; // -Y
            }
        });

        // Add applied nodal loads to F
        this.nodes.forEach((n, idx) => {
            F[idx * 3] += n.loadX;
            F[idx * 3 + 1] += n.loadY;
            F[idx * 3 + 2] += n.moment;
        });

        // 3. Apply Boundary Conditions (Partitioning / Penalty)
        // We will use the "Penalty Method" (Add huge number to diagonal of fixed dofs)
        // or just zero-out rows/cols and put 1 on diagonal. Zero-out is cleaner for solver stability.

        const constrainedDofs: number[] = [];
        this.nodes.forEach((n, idx) => {
            if (n.fixX) constrainedDofs.push(idx * 3);
            if (n.fixY) constrainedDofs.push(idx * 3 + 1);
            if (n.fixR) constrainedDofs.push(idx * 3 + 2);
        });

        // For constrained DOFs: Set K[i][j] = 0, K[i][i] = 1, F[i] = 0 (displacement = 0)
        // This effectively removes the equation.
        constrainedDofs.forEach(dof => {
            for (let j = 0; j < systemDof; j++) {
                K.set(dof, j, 0);
            }
            K.set(dof, dof, 1);
            F[dof] = 0; // Forced zero displacement
        });

        // 4. Solve
        const displacementsVec = K.solve(F);

        // 5. Format Results
        const displacements = new Map<number, { u: number, v: number, r: number }>();
        let maxDeflection = 0;

        this.nodes.forEach((n, idx) => {
            const u = displacementsVec[idx * 3];
            const v = displacementsVec[idx * 3 + 1];
            const r = displacementsVec[idx * 3 + 2];
            displacements.set(n.id, { u, v, r });

            const def = Math.sqrt(u * u + v * v);
            if (def > maxDeflection) maxDeflection = def;
        });

        // Calculate Reactions (R = K_original * d - F_applied)
        // Simplified: The penalty method messes up K, so we can't easily retrieve reactions 
        // without keeping a copy of original K. 
        // For this app, we only strictly need deflections for "Bounciness" check. 
        // We can skip reactions for now or implement later.

        return {
            displacements,
            reactions: new Map(),
            maxDeflection
        };
    }
}
