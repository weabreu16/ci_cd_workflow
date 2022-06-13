const math_utils = require('../src/math_utils');

test('add 1 + 5 to be 6', () => {
    expect( math_utils.sum(1, 5) ).toBe(6);
});

test('add 6 + 5 + 10 to be 21', () => {
    expect( math_utils.sum(6, 5, 10) ).toBe(21);
});

test('avg 1, 3 to be 2', () => {
    expect( math_utils.avg(1, 3) ).toBe(2);
});