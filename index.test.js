const INDEX = require('./index');

test(' empty string ', () => {
  expect(INDEX.add('')).toBe(0)
});

test(' return 1 ', () => {
  expect(INDEX.add('1')).toBe(1);
});

test(' add 1 + 2 ', () => {
    expect(INDEX.add('1,2')).toBe(3);
});

test(' add 2.1 + 2.1 ', () => {
  expect(INDEX.add('2.1,2.1')).toBe(4.2);
});

test('formatSecondParam', () => {
  expect(INDEX.formatSecondParam('1\n2')).toBe('1,2');
});

test(' 1 + \n3 ', () => {
  expect(INDEX.add('1','\n3')).toBe(4);
});


