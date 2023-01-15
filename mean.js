function mean(arr) {

let sum = 0

for (let i=0; i<arr.length; i++) {
  sum = sum + arr[i]
}

let mean = sum/arr.length
return mean

}

//a function that accepts an array filled with numbers and returns the arithmetic mean of those numbers
