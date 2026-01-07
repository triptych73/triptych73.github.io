import type { Node, Element } from './frame-solver';
import { type StaircaseInputs, CONSTANTS } from '../physics';

export function generateFoldedPlateModel(inputs: StaircaseInputs): { nodes: Node[], elements: Element[] } {
    const nodes: Node[] = [];
    const elements: Element[] = [];

    const {
        rise, going, stepCount, width, thickness,
        liveLoadType, cheekVisible
    } = inputs;

    // Safety
    if (stepCount < 1) return { nodes: [], elements: [] };

    const E = CONSTANTS.E_MODULUS;
    // Section Properties (Per unit width if we model as beam)
    // Actually, "width" is the width of the stair.
    // The "Folded Plate" is a beam of width = 'inputs.width' and depth = 'inputs.thickness'
    // This is very slender and flexible if treating it as a flat plate.
    // However, the "accordion" shape gives it geometric stiffness.

    // Geometric Properties of the Plate Section:
    // Width b = inputs.width
    // Depth h = inputs.thickness
    const b = width;
    const h = thickness;
    const A = b * h;
    const I = (b * Math.pow(h, 3)) / 12;

    // Loads
    // Dead Load (Steel Weight)
    // Density = 7850 kg/m3. 
    // Weight per meter length of element (w)
    // Area A is in mm2. Density in kg/m3.
    // Volume of 1mm length = A (mm2) * 1 (mm) = A * 1e-9 m3.
    // Mass per mm = A * 1e-9 * 7850 kg.
    // Weight per mm = Mass * 9.81 N.
    const deadLoadNPerMm = (A / 1e9) * CONSTANTS.STEEL_DENSITY * CONSTANTS.GRAVITY;

    // Live Load
    // 1.5 kN/m2 (domestic) or 2.5 (office).
    // Applied to the horizontal projection (Going).
    // Load per mm length of the Going element.
    const liveLoadKnM2 = liveLoadType === 'domestic' ? 1.5 : 2.5;
    const liveLoadNPerMm = (liveLoadKnM2 * 1000 * (width / 1000)) / 1000;
    // Explanation: (kN/m2 * 1000 -> N/m2) * (Width in m) = N/m length. / 1000 = N/mm.

    // We combine for ULS: 1.35 Dead + 1.5 Live
    // Note: Live load only applies to Tread (horizontal) elements usually, but for simplicity
    // we might smear it or only apply to "Going" elements. Let's apply strictly to Going.

    // Node Generation
    // We generate nodes at every "kink".
    // (0,0) -> (Going, 0) -> (Going, Rise) -> (2*Going, Rise) ...
    let nodeId = 0;

    // Start Node (Bottom Fixed)
    nodes.push({ id: nodeId++, x: 0, y: 0, fixX: true, fixY: true, fixR: true, loadX: 0, loadY: 0, moment: 0 });

    let currentX = 0;
    let currentY = 0;

    for (let i = 0; i < stepCount; i++) {
        // TREAD (Horizontal)
        currentX += going;
        nodes.push({
            id: nodeId++, x: currentX, y: currentY,
            fixX: false, fixY: false, fixR: false,
            loadX: 0, loadY: 0, moment: 0
        });

        // RISER (Vertical)
        // Only if not the very last point? 
        // Standard folded plate: Tread, Riser, Tread, Riser...
        // Top of stair usually lands on a landing.
        // Let's assume the stair ends at the top tread or riser top?
        // Usually ends at floor level (top riser).

        currentY += rise;
        nodes.push({
            id: nodeId++, x: currentX, y: currentY,
            fixX: false, fixY: false, fixR: false,
            loadX: 0, loadY: 0, moment: 0
        });
    }

    // Fix the last node (Top Landing) - Assume Pinned or Fixed?
    // User interface doesn't specify top support. Assume Pinned (prevent vertical/horiz).
    const lastNode = nodes[nodes.length - 1];
    lastNode.fixX = true;
    lastNode.fixY = true;
    lastNode.fixR = false; // Pin support

    // Element Generation
    let elemId = 0;
    for (let i = 0; i < nodes.length - 1; i++) {
        const n1 = nodes[i];
        const n2 = nodes[i + 1];

        const dx = Math.abs(n2.x - n1.x);
        // dy unused


        // Determine Load
        let distLoad = deadLoadNPerMm * 1.35; // ULS Dead
        if (dx > 0.1) {
            // Horizontal Element (Tread) - Add Live Load
            distLoad += liveLoadNPerMm * 1.5; // ULS Live
        }

        elements.push({
            id: elemId++,
            node1: n1.id,
            node2: n2.id,
            E: E,
            A: A,
            I: I,
            w: distLoad
        });
    }

    // Stringers (Cheeks)?
    // If cheeks are visible, they act as stiffeners.
    // In a 2D frame model, we can model them as a parallel beam OR 
    // just increase the I and A of the elements if they are welded fully?
    // "Folded Plate with Stringers" is complex. 
    // Simplified MSM approach: Add the Stringer Stiffness to the Plate Stiffness (Parallel stiffness).
    // This is valid if they assume same curvature (fully composite).

    if (cheekVisible) {
        // Cheek properties
        const cheekCount = inputs.cheekSide === 'two' ? 2 : 1;
        // Stringer is a beam at angle theta.
        // But our elements are horizontal/vertical.
        // This mismatch is hard to model in 1D elements unless we model the stringer as a separate
        // diagonal element connecting the nosings?
        // Let's try modeling the stringer as diagonal elements connecting the "Nosing" nodes.
        // Nodes: (Going, Rise) -> (2*Going, 2*Rise)...

        // Let's Iterate through "Nosing" nodes.
        // Nosing nodes are at indices: 2, 4, 6... (Top of Riser / End of Tread)
        // Wait, checks logic:
        // 0=(0,0)
        // 1=(G,0)  <- Bottom of Riser
        // 2=(G,R)  <- Top of Riser (Nosing 1)
        // 3=(2G,R)
        // 4=(2G,2R) <- Top of Riser (Nosing 2)

        // We can add "Stringer Elements" connecting Node 0 -> 2 -> 4 -> 6...
        // This simulates the stringer being attached to the nosings.

        const stringerW = inputs.cheekThickness * cheekCount;
        const stringerH = inputs.cheekHeight;

        // Parallel axis theorem? Or just geometric I?
        // Simple rectangular section for stringer
        const A_str = stringerW * stringerH;
        const I_str = (stringerW * Math.pow(stringerH, 3)) / 12; // Weak axis? No, strong vertical axis.
        // Actually, stringer bends about its strong axis (Depth = Height).

        let prevNodeId = 0; // Start at bottom
        for (let i = 2; i < nodes.length; i += 2) {
            const currNodeId = i;

            elements.push({
                id: elemId++,
                node1: prevNodeId,
                node2: currNodeId,
                E: E,
                A: A_str,
                I: I_str,
                w: 0 // Assume stringer carries no direct load, just stiffness? 
                // Or add its self-weight?
            });

            prevNodeId = currNodeId;
        }
    }

    return { nodes, elements };
}
