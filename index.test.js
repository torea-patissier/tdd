const INDEX = require('./index');

test(' empty string ', () => {
  expect(INDEX.simpleCalculator('')).toBe(0)
});