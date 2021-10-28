/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)*/
function sumDigits(number) {
  let result = 0;
  String(number)
    .split("")
    .map(function (num) {
      num >= 0 ? (result = num / 1 + result) : (result = 0);
    });
  return result;
}
