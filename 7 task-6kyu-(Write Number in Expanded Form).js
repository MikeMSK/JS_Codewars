// You will be given a number and you will need to return it as a string in Expanded Form. For example:
function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1) {
    var remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}
