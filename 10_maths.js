// Math functions for JavaScript

// add which returns the sum of both numbers
function add(a, b) {
    return a + b;
}

// subtract which returns the value of subtracting the second number from the first.
function subtract(a, b) {
    return a - b;
}

// multiply which returns the value of multiplying both numbers together.
function multiply(a, b) {
    return a * b;
}

const a = 1;
const b = 3;
const aPlusB = add(a, b);
const aMinusB = subtract(a, b);
const aTimesB = multiply(a, b);

console.log(`The sum of ${a} and ${b} is: ${aPlusB}`);
console.log(`The difference of ${a} and ${b} is: ${aMinusB}`);
console.log(`The product of ${a} and ${b} is: ${aTimesB}`);