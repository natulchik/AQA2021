const { TestWatcher } = require('@jest/core');
const reverseString = require('./reverse');

describe('Check the reverse function', () => {
    test('function exist', () => {
        expect(reverseString).toBeDefined();
    });
    
    test('Check the result of function', () => {
        expect(reverseString('cool')).toEqual('looc');
    });
})