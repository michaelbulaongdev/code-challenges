function roman (num) {
  let result = '';

  //check if num is within valid range
  let N = parseInt(num);
  if (N === 0 || N >= 4000) {
    return 'enter a whole number between 1 and 4000';
  }
  
  const resultArray = [];
  const numberArray = num.toString().split('').reverse();

  for (i = 0; i < numberArray.length; i++) {
    switch (i) {
      case 0: //ones
        switch (parseInt(numberArray[i])) {
          case 1: resultArray.push('I'); break;
          case 2: resultArray.push('II'); break;
          case 3: resultArray.push('III'); break;
          case 4: resultArray.push('IV'); break;
          case 5: resultArray.push('V'); break;
          case 6: resultArray.push('VI'); break;
          case 7: resultArray.push('VII'); break;
          case 8: resultArray.push('VIII'); break;
          case 9: resultArray.push('IX'); break;
        }
        break;
      case 1: //tens
        switch (parseInt(numberArray[i])) {
          case 1: resultArray.push('X'); break;
          case 2: resultArray.push('XX'); break;
          case 3: resultArray.push('XXX'); break;
          case 4: resultArray.push('XL'); break;
          case 5: resultArray.push('L'); break;
          case 6: resultArray.push('LX'); break;
          case 7: resultArray.push('LXX'); break;
          case 8: resultArray.push('LXXX'); break;
          case 9: resultArray.push('XC'); break;
        }
        break;
      case 2: //hundreds
        switch (parseInt(numberArray[i])) {
          case 1: resultArray.push('C'); break;
          case 2: resultArray.push('CC'); break;
          case 3: resultArray.push('CCC'); break;
          case 4: resultArray.push('CD'); break;
          case 5: resultArray.push('D'); break;
          case 6: resultArray.push('DC'); break;
          case 7: resultArray.push('DCC'); break;
          case 8: resultArray.push('DCCC'); break;
          case 9: resultArray.push('CM'); break;
        }
        break;
      case 3: //thousands
        switch (parseInt(numberArray[i])) {
          case 1: resultArray.push('M'); break;
          case 2: resultArray.push('MM'); break;
          case 3: resultArray.push('MMM'); break;
        }
        break;
    }
  }
  
  result = resultArray.reverse().join('');
  return result;
}

//test inputs
console.log(roman(1994));
console.log(roman(483));
console.log(roman(3999));
console.log(roman(4000));
console.log(roman(0));

//Write a function roman that converts an Arabic number into a Roman numeral.
//Example: roman(483) should return 'CDLXXXIII'.
