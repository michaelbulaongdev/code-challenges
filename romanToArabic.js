function arabic (str) {

  let sum = 0;

  let capStr = str.toUpperCase();

  //check if format is valid >>> work in progress

  //part 1: add everything regardless of position and check for invalid characters
  for (let i = 0; i < str.length; i++) {
    switch (capStr[i]) {
      case 'M':
        sum = sum + 1000;
        break;
      case 'D':
        sum = sum + 500;
        break;
      case 'C':
        sum = sum + 100;
        break;
      case 'L':
        sum = sum + 50;
        break;
      case 'X':
        sum = sum + 10;
        break;
      case 'V':
        sum = sum + 5;
        break;
      case 'I':
        sum = sum + 1;
        break;
      default:
        return 'invalid characters present';
    }
  }

  //part 2: subtract the excess based on occurence of these combinations
  const Arr = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

  for (let i = 0; i < Arr.length; i++) {
    if (capStr.includes(Arr[i])) {
      switch (Arr[i]) {
        case 'IV':
        case 'IX':
          sum = sum - 2;
          break;
        case 'XL':
        case 'XC':
          sum = sum - 20;
          break;
        case 'CD':
        case 'CM':
          sum = sum - 200;
          break;
        default:
          //do nothing
          break;
      }
    }
  }

  return sum;

}

//test input
console.log(arabic('mmmDcccLxxxViii')); //3888
console.log(arabic('iv')); //4
console.log(arabic('MCM')); //1900
console.log(arabic('abcd')); //invalid characters present
console.log(arabic('CDLXXXIII')); //483

//Write a function arabic that converts a Roman number into an Arabic.
//Example: arabic('CDLXXXIII') should return 483.
