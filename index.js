function isAMultipleof3or5(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    return "FizzBuzz";
  }
  if (a % 3 == 0) {
    return "Fizz";
  }
  if (a % 5 == 0) {
    return "Buzz";
  }
  return a.toString();
}

function fizzbuzz(a) {
  return isAMultipleof3or5(a)
}

//////////////////////////




module.exports = {
  fizzbuzz
};