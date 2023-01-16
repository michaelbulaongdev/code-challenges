function digitsum (num) {
  
  let sum = 0;

  let N = parseInt(num);
  let arrN = String(N).split('');

  // console.log(arrN);

  for (i = 0; i < arrN.length; i++) {
    sum = sum + parseInt(arrN[i]);
  }

  return sum;
}

//test input
console.log(digitsum(1));
console.log(digitsum(123));
console.log(digitsum(12345));

// Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits.
// Example: digitsum(192) should return 12.
