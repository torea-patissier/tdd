function simpleCalculator(a,b){
  if(a === ''){
    return 0 + b;
  }
  return a + b;
}

module.exports = {
    simpleCalculator
};