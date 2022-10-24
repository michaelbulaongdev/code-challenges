function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    

var x = year % 4;
var y = year % 100;
var z = year % 400;

if (x === 0 && y !== 0) {
    return("Leap year.");
}
else if (z === 0) {
    return("Leap year.");
}
else {
    return("Not leap year.");
}

/**************Don't change the code below****************/    

}
