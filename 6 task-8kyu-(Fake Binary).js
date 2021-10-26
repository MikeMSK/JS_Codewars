// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  var binary = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      binary += "0";
    } else {
      binary += "1";
    }
  }
  return binary;
}
