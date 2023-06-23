import { postHandler } from "../src/client/js/formHandler";

describe('Testing postHandler', () => {

    test('Data returned should status property with code equals 0', async() => {
        const url = new URL('http://localhost:8081/analyze');
        const input = {'text': 'https://afrocenchix.com', 'type': 'url'};
        const { status } = await postHandler(url, input);
        expect(status.code).toBe('0');
    });
})
