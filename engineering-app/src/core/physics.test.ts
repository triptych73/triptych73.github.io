import { describe, it, expect } from 'vitest';
import { calculatestructure, type StaircaseInputs } from './physics';

describe('Physics Engine', () => {

    // Default matching the original HTML defaults
    const defaultInputs: StaircaseInputs = {
        steelGrade: 'S275',
        liveLoadType: 'domestic',
        stepCount: 14,
        width: 1000,
        rise: 180,
        going: 250,
        thickness: 6,
        cheekVisible: true,
        cheekSide: 'two',
        cheekHeight: 250,
        cheekThickness: 10,
        calculationMethod: 'simplified',
    };

    it('calculates valid results for default inputs', () => {
        const result = calculatestructure(defaultInputs);

        expect(result.overallStatus).toBe('SAFE');
        expect(result.passGlobal).toBe(true);
        expect(result.passStress).toBe(true);
        expect(result.passLocal).toBe(true);
        expect(result.passSlenderness).toBe(true);

        // Sanity check values (approximate from original logic awareness)
        expect(result.steelMassKg).toBeGreaterThan(100);
        expect(result.deflectionTotal).toBeGreaterThan(0);
        expect(result.frequency).toBeGreaterThan(0);
    });

    it('fails when span is too long (Global Deflection Failure)', () => {
        const inputs = { ...defaultInputs, stepCount: 25, thickness: 5, cheekVisible: false };
        // 25 steps * 250 = 6.25m span. 5mm folded plate. Should fail.

        const result = calculatestructure(inputs);
        expect(result.passGlobal).toBe(false);
        expect(result.overallStatus).toBe('UNSAFE');
    });

    it('fails when stress is too high', () => {
        // High load, massive span (50 steps = 12.5m), normal section
        const inputs = { ...defaultInputs, liveLoadType: 'office' as const, stepCount: 50, cheekVisible: false };
        const result = calculatestructure(inputs);
        expect(result.passStress).toBe(false);
        expect(result.overallStatus).toBe('UNSAFE');
    });

    it('calculates using Matrix Method', () => {
        const inputs = { ...defaultInputs, calculationMethod: 'matrix' as const };
        const result = calculatestructure(inputs);

        expect(result.supportCondition).toBe('Matrix MSM');
        expect(result.deflectionTotal).toBeGreaterThan(0);
        // Matrix method (folded plate) should generally be stiffer than the naive "Smearing" if cheeks are present?
        // Or less stiff if the "Accordion" effect is strong?
        // For a standard stair, the simplified beam theory with "efficiency factor" approximates the accordion.
        // Let's just assert it runs and returns a number.
        expect(result.passGlobal).toBeDefined();
    });

    it('handles cheek stringers correctly (increases stiffness)', () => {
        const noCheeks = calculatestructure({ ...defaultInputs, cheekVisible: false });
        const withCheeks = calculatestructure({ ...defaultInputs, cheekVisible: true });

        expect(withCheeks.deflectionTotal).toBeLessThan(noCheeks.deflectionTotal);
        expect(withCheeks.inertia).toBeGreaterThan(noCheeks.inertia);
    });
});
