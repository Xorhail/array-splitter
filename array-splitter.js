const R = require('ramda');

const generateArraySplitter = (min, max) => R.reduce((acc, val) => {
  const [last = []] = acc.slice(-1);
  const allButLast = acc.slice(0, -1);
  if (last.length >= max) {
    return [...acc, [val]];
  }
  if (last.length < min) {
    return [...allButLast, [...last, val]];
  }
  const newArray = Math.random() > 0.5 ? [last, [val]] : [[...last, val]];
  return [...allButLast, ...newArray];
}, []);

module.exports = generateArraySplitter;
