function sum(a, b) {
  return a + b;
}

function sumOf(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
