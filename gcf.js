function gcf(a, b) {

let x = Math.max(a, b) + 1;

do {
  x = x - 1;
} while ((a%x !== 0) || (b%x !== 0));

return x;

}

//calculate greatest common factor of 2 numbers
