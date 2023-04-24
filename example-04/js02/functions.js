// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Declared function
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Declared functions has hoisting
// Hoisting = we can call the function before or after the declaration
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

console.log("The result of 5 * 10 =", multiply(5, 10));
console.log("The result of 5 / 2 =", divide("5", "2"));
console.log("The result of 5 0 / 2 =", divide("5 0", "2"));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Function expression
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Function expressions are used in the declaration of a variable
// No name, no hoist, are loaded on execution not in memory, are faster
const sum = function add(a, b) { return a + b; };
const substract = function (a, b) { return a - b; };

console.log("The result of 9 + 9 =", sum(9, 9));
console.log("The result of 90 - 20 =", sum(90, -20));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Self-invoking functions
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

(function() {
    console.log("Self-invoke");
}) ();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Arrow function
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Multiple lines needs the return statement
const squareArea = (base, height) => {
    const result = base * height;
    return result;
};
console.log("Square with sides 3 and 5 has the area", squareArea(3, 5));

// One line without return statement
const array = [1, 2, 4, 8, 16];
const result = array.reduce( (number, result) => result + number );
console.log("The result of the operation is", result);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Default parameters
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/**
 * Function documentation
 * @param {*} base 
 * @param {*} height 
 * @returns The triangle area
 */
const triangleArea = (base = 5, height = 1) => base * height / 2;
console.log("Triangle are with sides 5 and 10 is", triangleArea(10));