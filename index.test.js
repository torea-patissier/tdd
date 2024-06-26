const INDEX = require('./index');

test(' empty string ', () => {
  expect(INDEX.add('')).toBe(0)
});

test(' return 1 ', () => {
  expect(INDEX.add('1')).toBe(1);
});

test(' return 3 ', () => {
    expect(INDEX.add('1,2')).toBe(3);
});
