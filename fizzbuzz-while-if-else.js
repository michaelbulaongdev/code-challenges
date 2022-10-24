var output = [];
var count = 1;

function fizzBuzz(x) {

    while (count <= x) {
    
        if (count % 15 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);            
        }

        count++;
        
    }

    console.log(output);

}
