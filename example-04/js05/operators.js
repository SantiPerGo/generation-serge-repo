// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Operators
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/*
    --------------------------------------------------------------------------------------
    Normal (realizes operation with two numbers)
    --------------------------------------------------------------------------------------

    Addition +
    Substraction -
    Multiplication *
    Division /
    Exponential **
    Remainder % 

    --------------------------------------------------------------------------------------
    Unirios (realizes operation with one number)
    --------------------------------------------------------------------------------------

    Negation - (to create negative numbers) (Ex. -200)
    Conversion + (converts string to number) (Ex. +"200")

    --------------------------------------------------------------------------------------
    Logical operators
    --------------------------------------------------------------------------------------

    Not !
    And &&
    Or ||

    --------------------------------------------------------------------------------------
    Pre and post increment or decrement operators
    --------------------------------------------------------------------------------------

    Pre-increment ++x
    Pre-decrement --x
    Post-increment x++
    Post-decrement x--

    --------------------------------------------------------------------------------------
    Short circuit operators
    --------------------------------------------------------------------------------------

    And && 
        (boolean && operation) // If the boolean is true, makes the operation
        (NaN && operation) // NaN
        (string && operation) // Empty string is true, but with content is false
    Or ||
        (boolean && operation) // If the boolean is false, makes the operation
        (NaN && operation) // Operation
        (string && operation) // Empty string is true, but with content is false
*/

const firstCondition = true, secondCondition = false;
console.log(firstCondition && "Hi user first &&");
console.log(secondCondition && "Hi user second &&");
console.log(firstCondition || "Hi user first ||");
console.log(secondCondition || "Hi user second ||");

const text = firstCondition && "Short circuit operator";
console.log(text);

// Print a text if isOnline and isActive are true
const isOnline = true, isActive = true;
console.log(isOnline && isActive && "You're authorized");

/*
    --------------------------------------------------------------------------------------
    Relational operators (compares value)
    --------------------------------------------------------------------------------------

    In a not-strict comparation, when the operands have different types, both are
    converted to Number, but if they are strings, both are compared letter by letter

    > greater than
    < less than
    >= greater or equal than
    <= less or equal than
    == Equal
    != Distinct of

    --------------------------------------------------------------------------------------
    Strict Comparation (compares value and type)
    --------------------------------------------------------------------------------------

    === Strictly equal
    !== Strictly distinct of
*/

console.log(true == "true");            // 1 == NaN is false
console.log(23 < "40");                 // 23 < 40 is true
console.log("b" < "A");                 // 98 (b) < 65 (A) is false
console.log("hola" < "HOLA");           // 104 (h) < 72 (H) is false
console.log("Hola" < "123");            // 72 (H) < 49 (1) is false
console.log("Hola" < "KeHace" + 1000);  // 72 (H) < 75 (K) is true, number concatenated

/*
    --------------------------------------------------------------------------------------
    Desestructuring and spread operator
    --------------------------------------------------------------------------------------

    To extract elements from arrays or objects to make complex assignments
*/
let dataA = 10, dataB = 20;
[dataA, dataB] = [dataB, dataA];
console.log("a:", dataA, "b:", dataB);

// Arrays desestructuring elements are positional
const notes = [50, 80, 100, 30, 60, 99];
let otherElements;
[dataA, , dataB, ...otherElements] =  notes;
console.log("a:", dataA, "b:", dataB, "other:", otherElements);

// In objects we have to use the same name of the properties
const firstYear = {
    dataA: "43 students",
    dataB: "50 students",
    extraA: "20 students"
};
( {dataA, dataB} = firstYear );

// Desestructuring with different names and default value
( {extraA: dataA, extraB: dataB = "default"} = firstYear );

// Desestructuring in a constant
const { extraA } = firstYear;
console.log("a:", dataA, "b:", dataB, "extraA:", extraA);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Division function of two integer numbers, return the quotient and remainder
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Divide function with array and object desestructuring
const divideTwoNumbersObject = (dividend, divider) => {
    const quotient = parseInt(dividend / divider);
    const remainder = dividend % divider;
    return { quotient, remainder };
};
const divideTwoNumbers = (dividend, divider) => [parseInt(dividend / divider), dividend % divider];

// Assignment with array and object desestructuring
let { quotient, remainder } = divideTwoNumbersObject(9, 5);
[ quotient, remainder ] = divideTwoNumbers(9, 5);

console.log(`The result of divide 9 between 5 is ${quotient} with remainder ${remainder}`);