const assert = require('assert');
const R = require('ramda');
const generateArraySplitter = require('./array-splitter');

describe.only('array-splitter', () => {
  const randomArray = R.range(1, 16);
  const splitter = generateArraySplitter(2, 4);
  for (let i = 0; i < 20; i++) {
    const splitArray = splitter(randomArray);
    const lastArray = R.last(splitArray);
    it(`last array ${JSON.stringify(lastArray)} length should be between 2 and 4 inclusive`, async() => {
      const actual = lastArray.length;
      assert.equal(
        actual >= 2 && actual <= 4,
        true
      );
    });
  }
});
