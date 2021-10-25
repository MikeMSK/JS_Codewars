/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
  let x = 0;
  let o = 0;
  let stringNew = str.toUpperCase();
  for (let i = 0; i < stringNew.length; i++) {
    if (stringNew[i] == "X") {
      x += 1;
    } else if (stringNew[i] == "O") {
      o += 1;
    }
  }
  return x === o;
}
