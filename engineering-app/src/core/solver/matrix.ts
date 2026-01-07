/**
 * Lightweight Matrix Algebra for 2D Frame Solver
 */

export class Matrix {
    rows: number;
    cols: number;
    data: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(rows).fill(0).map(() => Array(cols).fill(0));
    }

    static zeros(rows: number, cols: number): Matrix {
        return new Matrix(rows, cols);
    }

    set(row: number, col: number, value: number) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.data[row][col] = value;
        }
    }

    get(row: number, col: number): number {
        return this.data[row][col] || 0;
    }

    // Add another matrix to this one (in place if specified, else returns new)
    add(other: Matrix): Matrix {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error(`Matrix dimensions mismatch: ${this.rows}x${this.cols} vs ${other.rows}x${other.cols}`);
        }
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] + other.data[i][j];
            }
        }
        return result;
    }

    multiply(other: Matrix): Matrix {
        if (this.cols !== other.rows) {
            throw new Error(`Matrix multiply mismatch: ${this.rows}x${this.cols} * ${other.rows}x${other.cols}`);
        }
        const result = new Matrix(this.rows, other.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * other.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }

    multiplyVec(vec: number[]): number[] {
        if (this.cols !== vec.length) {
            throw new Error(`Matrix-Vector dimension mismatch: Matrix cols ${this.cols} vs Vector len ${vec.length}`);
        }
        const result = new Array(this.rows).fill(0);
        for (let i = 0; i < this.rows; i++) {
            let sum = 0;
            for (let j = 0; j < this.cols; j++) {
                sum += this.data[i][j] * vec[j];
            }
            result[i] = sum;
        }
        return result;
    }

    // Gaussian Elimination with Partial Pivoting to solve Ax = b
    // Returns x vector
    solve(b: number[]): number[] {
        if (this.rows !== this.cols) throw new Error("Matrix must be square to solve");
        if (this.rows !== b.length) throw new Error("Dimension mismatch for b");

        const N = this.rows;
        // Clone data to augmented matrix [A|b]
        const A = this.data.map(row => [...row]);
        const x = new Array(N).fill(0);
        // We'll work on B separately or keep it in the loop. 
        // Let's copy B so we don't mutate input
        const B = [...b];

        // Forward Elimination
        for (let k = 0; k < N; k++) {
            // Find pivot
            let maxRow = k;
            let maxVal = Math.abs(A[k][k]);

            for (let i = k + 1; i < N; i++) {
                if (Math.abs(A[i][k]) > maxVal) {
                    maxVal = Math.abs(A[i][k]);
                    maxRow = i;
                }
            }

            // Swap rows
            if (maxRow !== k) {
                [A[k], A[maxRow]] = [A[maxRow], A[k]];
                [B[k], B[maxRow]] = [B[maxRow], B[k]];
            }

            // Pivot check
            if (Math.abs(A[k][k]) < 1e-10) {
                // Singular matrix
                console.warn("Matrix is near-singular");
                return x; // Return zeros or throw
            }

            // Eliminate
            for (let i = k + 1; i < N; i++) {
                const factor = A[i][k] / A[k][k];
                for (let j = k; j < N; j++) {
                    A[i][j] -= factor * A[k][j];
                }
                B[i] -= factor * B[k];
            }
        }

        // Backward Substitution
        for (let i = N - 1; i >= 0; i--) {
            let sum = 0;
            for (let j = i + 1; j < N; j++) {
                sum += A[i][j] * x[j];
            }
            x[i] = (B[i] - sum) / A[i][i];
        }

        return x;
    }
}
