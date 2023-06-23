import { interpretPolarity } from "../src/client/js/formHandler";

describe('Testing interpretPolarity', () => {
    test('It should return NEUTRAL when scoreTag is Neu', () => {
        expect(interpretPolarity('NEU')).toBe('NEUTRAL');
    });

    test('It should return N/A when scoreTag is blank', () => {
        expect(interpretPolarity('')).toBe('N/A');
    });

    test('It should return NO POLARITY when scoreTag is NONE', () => {
        expect(interpretPolarity('NONE')).toBe('NO POLARITY');
    });

    test('It should return POSITIVE when scoreTag is P+', () => {
        expect(interpretPolarity('P+')).toBe('POSITIVE');
    });

    test('It should return POSITIVE when scoreTag is P', () => {
        expect(interpretPolarity('P')).toBe('POSITIVE');
    });

    test('It should return NEGATIVE when scoreTag is N+', () => {
        expect(interpretPolarity('N+')).toBe('NEGATIVE');
    });

    test('It should return NEGATIVE when scoreTag is N', () => {
        expect(interpretPolarity('N')).toBe('NEGATIVE');
    });
})
