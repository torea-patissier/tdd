const INDEX = require('./index');

test('FizzBuzz',() => {
  expect(INDEX.fizzbuzz(15)).toBe('FizzBuzz')
});

test('Fizz', () => {
  expect(INDEX.fizzbuzz(3)).toBe('Fizz')
});

test('Buzz', () => {
  expect(INDEX.fizzbuzz(5)).toBe('Buzz')
});

test('Number', () => {
  expect(INDEX.fizzbuzz(7)).toBe('7')
})
 //////////////////////////


