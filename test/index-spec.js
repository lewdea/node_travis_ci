var assert = require('assert');
var calculator = require('../index');
describe('calculator', function() {
    describe('add function', function() {
        it('adds numbers 0', function () {
            var result = calculator.add(1, 1);
            assert.equal(result, 2);
        });

        it('adds numbers 1', function () {
            var result = calculator.add(1, 2);
            assert.equal(result, 3);
        });

        it('adds numbers 2', function () {
            var result = calculator.add(1, 3);
            assert.equal(result, 4);
        });

        it('adds numbers 2', function () {
            var result = calculator.add(1, 4);
            assert.equal(result, 5);
        });

        it('adds numbers 4', function () {
            var result = calculator.add(1, 5);
            assert.equal(result, 6);
        });

        it('adds numbers 5', function () {
            var result = calculator.add(1, 6);
            assert.equal(result, 7);
        });
    });
});