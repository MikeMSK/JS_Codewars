//Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
  let result = x.reduce((sum, current) => sum * current, 1);
  return result;
}
