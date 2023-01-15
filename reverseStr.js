function reverse (str) {
  
  let n = str.length - 1;
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[n - i];
  }

  return newStr;

}
