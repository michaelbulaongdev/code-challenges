function add(num1, num2) {
    return num1 + num2;
}

function subt(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function rem(num1, num2) {
    return num1 % num2;
}


// Higher Order Function

function calc(num1, num2, operator) {
    return operator(num1, num2);
}
