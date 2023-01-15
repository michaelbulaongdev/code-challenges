function isPrime(x) {

let factor = 0

for (let i=1; i<=x; i++) {
  if (x%i === 0) {
    factor = factor + 1;
    continue;
  }
}

return (factor === 2)

}
