// test file for randomNumbers.js - ensures that the huge array contains only unique numbers, and is the right length.

const assert = require('chai').assert;
const randomToTenK  = require('../randomNumbers.js');

describe("randomToTenK", () => {
  it('Should return an array', () => {
    let result = randomToTenK();
    assert.isOk(Array.isArray(result), 'array dude');
  });

  it('Should have an array length of 10,000', () => {
    let result = randomToTenK();
    assert.isOk(result.length === 10000);
  });

  it('Should contain every number of the big array', () => {
    let i = 1;
    let array = [];
    do {
      array.push(i);
      i++;
    } while (i <= 10000);

    let result = randomToTenK();
    // go through returned array and check that the value is in the array
    array.map(x => {
      assert.isOk(result.includes(x));
    });
  });

  it("Doesn't contain duplicates in the array", () => {
    let result = randomToTenK();
    result.sort();
    for (let i = 0; i < result.length; i++) {
      
      assert.isOk(result[i] !== result[i + 1]);
    }
  });

});