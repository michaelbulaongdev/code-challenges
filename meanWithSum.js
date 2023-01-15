function sum (Arr) {
  let sum = 0;
  for (i = 0; i < Arr.length; i++) {
    sum = sum + Arr[i];
  }
  return sum;
}

function mean (Arr) {
  return sum(Arr) / Arr.length
}

//A function sum that takes an array of numbers and returns the sum of these numbers. Write a function mean that takes an array of numbers and returns the average of these numbers. The mean function should use the sum function.
