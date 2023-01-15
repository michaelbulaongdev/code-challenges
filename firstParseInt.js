function parseFirstInt (str) {
  
  let result = '';

  if (Number.isNaN(parseInt(str))) {

    for (let i = 0; i < str.length; i++) {
      
      let char = str[i];
      if (Number.isNaN(parseInt(char))) {
        if (char === '-') {
          result = result + char;
        } else {
          //do nothing;
        }
      } else {
        result = result + char;
      }
    }

    if (result === '') {
      return NaN;
    } else {
      return parseInt(result);
    }

  } else {
    return parseInt(str);
  }
}

//test inputs
console.log(parseFirstInt('No. 10'));
console.log(parseFirstInt('18.12'));
console.log(parseFirstInt('Sum: -120'));
console.log(parseFirstInt('Babylon'));

//A function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, it returns NaN.
