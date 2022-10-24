function beer(x) {

    while (x > 0) {

        if (x > 1) {
            console.log(x + " bottles of beer on the wall. Take 1 down, pass it around, " + (x-1) + " bottles of beer on the wall.");
        }
        else {
            console.log("1 bottle of beer on the wall. Take 1 down, pass it around, no more bottles of beer on the wall.");
        }

        x--;
    
    }

    console.log("No more bottles of beer on the wall.");

}

