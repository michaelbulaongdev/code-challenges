var output = [];

function fibonacciGenerator(n) {

    for (var i = 0; i < n; i++) {

        if (i < 2) {
            output.push(i);
        }
        else {
            output.push(output[i-1] + output[i-2]);
        }
            
    }
    
    console.log(output);
}
