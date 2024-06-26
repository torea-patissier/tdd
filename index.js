function formatSecondParam(param) {
  return param.replace(/\n/g, ',');
}

function add(a, b) {
  if (a === '') return 0;
  if (a.length > 1) {
    const split = a.split(',');
    return Number(split[0]) + Number(split[1]);
  }
  return Number(a);

  if (b) {
    return Number(a) + Number(b);
  }
}

module.exports = {
  add,
  formatSecondParam
};