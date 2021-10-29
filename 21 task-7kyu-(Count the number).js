/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)*/

function getDivisorsCnt(n) {
  let x = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      x += 1;
    }
  }
  return x;
}
