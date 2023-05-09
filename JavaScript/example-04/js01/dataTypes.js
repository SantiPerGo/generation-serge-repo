// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 7 primitive data types
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 1 - String: "Hi"
console.log("String data type:", "Hi");

// 2 - Number: 12, -12, 12.25, +Infinity, -Infinity, NaN
// Numeric uses 64 bits to store, but 53 bits to represent the number
console.log("Number data type:", 12, -12, 12.25, +Infinity, -Infinity, NaN);
console.log("Maximum value for a numeric type:", Number.MAX_VALUE);
console.log("Safety value for a numeric type:", Number.MAX_SAFE_INTEGER);

// 3 - Bigint represents numeric integers when we cannot use the Number type
let myBigInt = 9007199254740991n;
console.log("BigInt data type:", myBigInt);

// Comparing safety value for numeric with and without biginteger
console.log("Safety value for a numeric type plus 1:", Number.MAX_SAFE_INTEGER + 1);
console.log("Safety value for a numeric type plus 2:", Number.MAX_SAFE_INTEGER + 2 );
console.log("Safety value for numeric plus 1n:", myBigInt + 1n);
console.log("Safety value for numeric plus 2n:", myBigInt + 2n);

// 4 - Boolean: True or False
console.log("Boolean data type:", true, false);

// 5 - Undefined is declarated but without type defined
let myUndefined;
console.log("Undefined data type:", myUndefined);

// 6 - Null is intentionally used to delete the data type
let myNull = "Hi";
myNull = null;
console.log("Null data type:", myNull);

// Null is considered as object but is primitive
console.log("Object data type:", typeof(myNull));

// 7 - Symbol is used to create private properties in the objects

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Non-primitive data types
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Simple object
const myData = {
    // Key: value
    name: "Santiago",
    lastname: "Perez Gomez",
    age: 23,
    isGamer: false,
    preferredMusicByGenre: {
        electronic: "Get Lucky",
        pop: "Happy"
    },
    fullName: function getFullName() {
        return this.name + " " + this.lastname;
    }
}
console.log("My data:", myData);
console.log("My name:", myData.name);
console.log("My name:", myData.preferredMusicByGenre.electronic);
console.log("My full name:", myData.fullName());

// Arrays is an special object with predefined methods
const songs = [
    "Get Lucky",
    "Happy",
    "Instant Crush",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];
console.log("Song of Daft Punk:", songs[0]);
console.log("Total songs:", songs[3].total, songs[3]["total"]);
console.log("Songs of 2021:", songs[3][2021]);

// Using array methods
console.log("Total elements in the array:", songs.length);
console.log("Index of the song Happy:", songs.indexOf("Happy"));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Data type conversion
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Number to string
const myNumber =  420;
console.log("My number is number:", myNumber);
console.log("My number is string:", String(myNumber));

// String to number, integer and float
// Parse int and float convert the first part of the string, but number throws error
const myString = "420.25 123";
console.log("My string is string:", myString);
console.log("My string is number:", Number(myString));
console.log("My string is integer:", parseInt(myString));
console.log("My string is float:", parseFloat(myString));

// String to boolean
// If we use Boolean(), to get false: "", 0, null, undefined, NaN
const isReady = JSON.parse("true");
console.log( (isReady) ? "I'm ready" : "I'm not ready" );

// Number to boolean
// 0 = false, 1 = true

// Array to number 
// [] = 0, [one] = one, [one, ...] = NaN

// Array to string
// [] = "", [one, two] = "one,two"

// Function to string
// function(){} = function(){}

// Object to string
// {} = [object, object]