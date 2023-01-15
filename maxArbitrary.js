function max() {

let max = arguments[0];

for (let i=1; i<arguments.length; i++) {
  if (arguments[i] > arguments[i-1]) {
    max = arguments[i];
    continue;
  }
}

return max;

}

//a function that calculates the maximum of an arbitrary number of numbers
