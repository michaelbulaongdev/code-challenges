function add (str) {
  
  let addends = str.split('+');
  let sum = 0;
  
  for (i = 0; i < addends.length; i++) {
    sum = sum + parseInt(addends[i]);
  }

  return sum;
  
}

//test input
console.log(add('7+12+100'));

//A function that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.
