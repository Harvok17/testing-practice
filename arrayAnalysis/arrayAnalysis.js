export const analyze = (arr) => {
  if (arr.length === 0) return {};

  return {
    average: arr.reduce((acc, cur) => acc + cur, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
