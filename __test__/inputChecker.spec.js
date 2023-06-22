import { 
    blankInputChecker,
    urlChecker
} from "../src/client/js/inputChecker";

describe('Testing input validation', () => {
    test('It should return true if blank input', () => {
        expect(blankInputChecker('')).toBeTruthy();
    });

    test('It should return true if input is a valid url', () => {
        expect(urlChecker('https://afrocenchix.com')).toBeTruthy();
    });
});
