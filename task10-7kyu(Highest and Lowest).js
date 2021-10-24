//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  let result = "";
  let arr = numbers.split(" ");
  let numMin = Math.min.apply(Math, arr);
  let numMax = Math.max.apply(Math, arr);
  result = numMax + " " + numMin;
  return result;
}
