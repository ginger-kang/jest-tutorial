exports.max = arr => Math.max(...arr);
exports.min = arr => Math.min(...arr);
exports.avg = arr =>
  arr.reduce((acc, curr, idx, arr) => acc + curr / arr.length, 0);
exports.sort = arr => arr.sort((a, b) => a - b);
exports.medium = arr => {
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2) {
    return arr[mid];
  }
  return (arr[mid - 1] + arr[mid]) / 2;
};
exports.mode = arr => {
  const counts = new Map();
  arr.forEach(num => {
    const count = counts.get(num) || 0;
    counts.set(num, count + 1);
  });
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(num => counts.get(num) === maxCount);

  if (modes.length === arr.length) {
    return null;
  }

  if (modes.length > 1) {
    return modes;
  }

  return modes[0];
};
