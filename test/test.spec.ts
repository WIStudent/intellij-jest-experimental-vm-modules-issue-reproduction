import foo from '../src/foo.js';

describe('test', () => {
    it('test1', () => {
        expect(true).toBe(false);
    });

    it('test2', () => {
        expect(foo).toEqual("foo")
    })
});