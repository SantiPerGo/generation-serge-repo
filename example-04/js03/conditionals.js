// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Anidated block scope
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

{
    let name = "Santiago", santiAge = 23, alvaroAge = 25;
    
    let santiCohorte = alvaroCohorte = 26;
    // The previous line is equal to:
    // var alvaroCohorte = 26;
    // let santiCohorte = alvaroCohorte

    {
        let name = "Alvaro";
        console.log(`My name is ${name}`);
        console.log(`Alvaro age is ${alvaroAge}`);
        console.log(`Santiago age is ${santiAge}`);
        console.log(`Alvaro cohorte is ${alvaroCohorte}`);
        console.log(`Santiago cohorte is ${santiCohorte}`);
    }

    console.log(`My name is ${name}`);
    console.log(`Alvaro age is ${alvaroAge}`);
    console.log(`Santiago age is ${santiAge}`);
    console.log(`Alvaro cohorte is ${alvaroCohorte}`);
    console.log(`Santiago cohorte is ${santiCohorte}`);
}

/* Here is error because variables are not declared
console.log(`Alvaro age is ${alvaroAge}`);
console.log(`Santiago age is ${santiAge}`);
console.log(`Santiago cohorte is ${santiCohorte}`);
*/
// Here is valid because the variable was declared with Var
console.log(`Alvaro cohorte is ${alvaroCohorte}`);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// If-else conditional
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// The string or boolean is converted to number
const temperature = "21";
let message;

// Because the strict comparison, the result is the else block
if(temperature === 21)
    message = `Ideal Temperature ${temperature} degrees`;
else if(temperature > 21 && temperature < 40)
    message = `Temperature ${temperature} degrees is hot`;
else if(temperature < 21)
    message = `Temperature ${temperature} degrees is cold`;
else
    message = `${temperature} degrees doesn't exist`;

console.log(message);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Switch
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const setFanSpeed = speed => {
    let message;

    switch (speed) {
        case 0:
            message = "Off";
            break;
        case 1:
            message = "Slow speed";
            break;
        case 2:
            message = "Meium Speed";
            break;
        case 3:
            message = "High Speed";
            break;
        case 4: case 5:
            message = "Super High Speed";
            break;    
        default:
            message = "That speed doesn't exist";
            break;
    }

    return message;
}

// Switch uses strict comparison (value and type), so we can't use strings as arguments
console.log(`The fan mode is: ${setFanSpeed(1)}`);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Ternary operator
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// The underscore is used to separate big numbers
const creditCardPayment = true, subtotal = 1_000;

// The ternary operator has 3 operands, used as alternative to if-else statement
// condition ? statementIfTrue : statementIfFalse;
console.log(`The bill is ${creditCardPayment ? subtotal * 1.025 : subtotal} pesos`)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Ask for the month number from one to twelve
// Show the year season with alert or dom usiing if-else 
// 1, 2, 12 = winter
// 3, 4, 5 = spring
// 6, 7, 8 = summer
// 9, 10, 11 = autumn

const getSeason = () => {
    const month = parseInt(document.getElementById("month").value);
    let season = "The season is ";
    let gifUrl;

    if(month === 1 || month === 2 || month === 12) {
        season += "winter";
        gifUrl = "https://embed.lottiefiles.com/animation/83648";
    } else if(month >= 3 && month <= 5) {
        season += "spring";
        gifUrl = "https://embed.lottiefiles.com/animation/110535";
    } else if(month >= 6 && month <= 8) {
        season += "summer";
        gifUrl = "https://embed.lottiefiles.com/animation/66769";
    } else if(month >= 9 && month <= 11) {
        season += "autumn";
        gifUrl = "https://embed.lottiefiles.com/animation/91509";
    } else
        season = "Error, that number is not a month";

    document.getElementById("season").innerText = season;
    document.getElementById("gif").setAttribute("src", gifUrl);
};

const getSeasonWithSwitch = () => {
    const month = parseInt(document.getElementById("month").value);
    let season = "The season is ";
    let gifUrl;

    switch(month) {
        case 1: case 2: case 12:
            season += "winter";
            gifUrl = "https://embed.lottiefiles.com/animation/83648";
            break;
        case 3: case 4: case 5:
            season += "spring";
            gifUrl = "https://embed.lottiefiles.com/animation/110535";
            break;
        case 6: case 7: case 8:
            season += "summer";
            gifUrl = "https://embed.lottiefiles.com/animation/66769";
            break;
        case 9: case 10: case 11:
            season += "autumn";
            gifUrl = "https://embed.lottiefiles.com/animation/91509";
            break;
        default:
            season = "Error, that number is not a month";
            break;
    }

    document.getElementById("season").innerText = season;
    document.getElementById("gif").setAttribute("src", gifUrl);
};

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Recursive function to print ten greetings in console with ternary operator
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const printGreetings = number => {
    let result = (number > 1) ? printGreetings(number-1) : number;
    console.log("Greeting", result);
    return number+1;
};
printGreetings(10);

const saludar = (numero) => {
    numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
};
saludar(10);
