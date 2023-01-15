function lcm(a, b) {

let x = 0;

do {
  x = x + 1;
} while ((x%a !== 0) || (x%b !== 0));

return x;

}

//calculate least common multiple of 2 numbers
