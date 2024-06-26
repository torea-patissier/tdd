function add(a) {
  if (a === '') return 0;

  if (a.length > 1) {
    const split = a.split(',');
    return Number(split[0]) + Number(split[1]);
  }

  return Number(a);
}

module.exports = {
  add
};