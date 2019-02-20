
describe('Check Sequence function', function() {
    it('passes if arrays are equal', function() {
        var a = [1, 2];
        var b = [1, 3];
         expect(checkSequence(a, b)).toBe(true);
    }); 
});