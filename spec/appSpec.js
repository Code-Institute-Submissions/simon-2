describe('Simon Functions', function() {
    
    describe('Check Sequence function', function() {
        it('Returns true if arrays are equal', function() {
            var a = [1, 2];
            var b = [1, 2];
            expect(checkSequence(a, b)).toBe(true);
        });
        it('Returns false if arrays are not equal', function() {
            var a = [1, 2];
            var b = [1, 3];
            expect(checkSequence(a, b)).toBe(false);
        });
        it('Should return true if arrays are equal even if they are long arrays', function() {
            var a = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            var b = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            expect(checkSequence(a, b)).toBe(true);
        });
    });



    describe('Check Random Number Generator', function() {
        it('Random Number Generator should return a number between 0 and 3', function() {
            let item;
            var sequence = [];
            let result = randomNumberGen(sequence);
            if (result === '0' || result === '1' || result === '2' || result === '3') {
                item = result;
            };

            expect(result).toEqual(item)
        });
    });
});
