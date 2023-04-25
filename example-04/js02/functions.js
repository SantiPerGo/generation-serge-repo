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

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Rest parameters
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Represents indefined values in the arguments as an array
function sumatory(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++)
        result += numbers[i];
    return result;
}
console.log("The sumatory from 1 to 4 is", sumatory(1, 2, 3, 4));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Callback functions
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Callback functions are normally used when you have different JS files

// Functions used as arguments to complete an action
const printText = (text) => { console.log(text); };
const callAlert = (text) => { alert(text); };
const createH1 = (text) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    document.querySelector("#div").innerHTML = `<h1>${text}</h1>`;
};

// Function that receives other functions
function getNameAndPrint(printFunction) {
    const name = prompt("Tell me your name");
    const text = `Hi ${name}, have a nice day`;
    printFunction(text);
}

// Using functions as parameters
//getNameAndPrint( printText );
//getNameAndPrint( callAlert );
//getNameAndPrint( createH1 );

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Recursive functions
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const factorial = number => (number === 1) ? number : number * factorial(number - 1);
console.log( factorial(5) );

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise using callback functions
// Duplicate by two each value of an array, save it in another array and print it
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

console.log("--------------------------------------");
console.log("Exercises");
console.log("--------------------------------------");

// Using callback function
function duplicateWithMap(array, mapFunction) {
    const doubleNumbers = array.map( mapFunction ); 
    return doubleNumbers;
}

// Sending anonymous function as callback function
const numbers = [5, 10, 15, 20, 25];
const doubleNumbers = duplicateWithMap(numbers, function(number) {
    return number * 2;
});
console.log(doubleNumbers);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Compare two arrays and print common elements
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Quadratic solution
function getCommonCourses(student1Courses, student2Courses) {
    const commonCourses = []

    for(let i = 0; i < student1Courses.length; i++)
        for(let j = 0; j < student2Courses.length; j++)
            if(student1Courses[i] === student2Courses[j])
                commonCourses.push(student1Courses[i]);

    return commonCourses;
}

// Linear solution with filter
function getCommonCoursesWithFilter(student1Courses, student2Courses, student3Courses) {
    return student1Courses.filter(course => student2Courses.includes(course) && student3Courses.includes(course));
}

const student1Courses = ['Math', 'English', 'Programming', 'Biology', 'Physics', 'Music'];
const student2Courses = ['Geography', 'Spanish', 'Programming', 'Music'];
const student3Courses = ['English', 'Physics', 'Biology', 'Music'];
const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses, student3Courses);
console.log("Common courses:", commonCourses.join(", "));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Count the characters in an string
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Input: pepe pecas pica papas con un pico y una pala
// Output: number of ocurrences, ex. for 'p' the output is 8

// Spread syntax to convert string into letters array
const countCharacters = (text, letter) => text.toLowerCase().split("").filter(arrayLetter => arrayLetter == letter).length;
const text = "pepe pecas pica papas con un pico y una pala";
console.log("The total P letters are", countCharacters(text, 'p'));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Recursive function to print ten greetings in console
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const printGreetings = number => {
    if(number > 1)
        printGreetings(number-1);
    
    console.log("Greeting", number);
};
printGreetings(10);