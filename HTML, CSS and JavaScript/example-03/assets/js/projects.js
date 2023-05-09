// **************************************************************************************
// Change title function
// **************************************************************************************

function changeTitleName(elementId) {
    const userName = prompt("What's your name?");
    document.getElementById(elementId).innerHTML = userName;
}

// **************************************************************************************
// Calculator functions
// **************************************************************************************

let operation = "", firstNumber = "", clearCalculator = false;

function buttonPressed(htmlElement) {
    const calculatorElement = document.getElementById("calculator-title");
    let calculatorText = calculatorElement.innerHTML;
    const elementId = htmlElement.id;

    if(calculatorText === "0" || clearCalculator || calculatorText === "Input Error")
        calculatorText = "";
    
    switch(elementId){
        case "zero":
            calculatorText += "0";
            clearCalculator = false;
            break;
        case "one":
            calculatorText += "1";
            clearCalculator = false;
            break;
        case "two":
            calculatorText += "2";
            clearCalculator = false;
            break;
        case "three":
            calculatorText += "3";
            clearCalculator = false;
            break;
        case "four":
            calculatorText += "4";
            clearCalculator = false;
            break;
        case "five":
            calculatorText += "5";
            clearCalculator = false;
            break;
        case "six":
            calculatorText += "6";
            clearCalculator = false;
            break;
        case "seven":
            calculatorText += "7";
            clearCalculator = false;
            break;
        case "eight":
            calculatorText += "8";
            clearCalculator = false;
            break;
        case "nine":
            calculatorText += "9";
            clearCalculator = false;
            break;
        case "dot":
            calculatorText += ".";
            clearCalculator = false;
            break;
        case "plus":
        case "minus":
        case "divide":
        case "multiply":
            if(operation != "" && firstNumber != "")
                calculatorText = calculateOperation(firstNumber, calculatorText, operation);
            firstNumber = calculatorText;
            operation = elementId;
            clearCalculator = true;
            break;
        case "equal":
            calculatorText = calculateOperation(firstNumber, calculatorText, operation);
            firstNumber = calculatorText;
            operation = "";
            clearCalculator = false;
            break;
        case "ac":
            firstNumber = "";
            operation = "";
            calculatorText = "0";
            clearCalculator = false;
            break;
    }

    if(calculatorText.length <= 15)
        calculatorElement.innerHTML = calculatorText;
}

function calculateOperation(firstNumber, secondNumber, operation) {
    let result;
    switch(operation) {
        case "plus":
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case "minus":
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case "divide":
            result = Number(firstNumber) / Number(secondNumber);
            break;
        case "multiply":
            result = Number(firstNumber) * Number(secondNumber);
            break;
    }

    if(isNaN(result))
        return "Input Error";
    else
        return String(result);
}

// **************************************************************************************
// Guess the number functions
// **************************************************************************************

function startGuessNumber() {
    restartGuessGame();
    document.getElementById("guess-text").classList.add("d-none");
    document.getElementById("guess-game").classList.remove("d-none");
    guessNumber(false);
}

let numberToGuess, greaterAsked, numberAsked, addition, lowLimit, highLimit;

function guessNumber(isTheAnswer) {
    const answerElement = document.getElementById("guess-answer");

    calculateNumberToGuess(isTheAnswer);

    if(numberToGuess < lowLimit || numberToGuess > highLimit) {
        alert("Game ended!\nYou didn't choose a valid number!");
        restartGuessGame();
    } else if(isTheAnswer && numberAsked && !greaterAsked) {
        alert(`Game ended!\nYour number is ${numberToGuess}, excellent decision!`);
        restartGuessGame();
    } else if(!numberAsked && !greaterAsked) {
        answerElement.innerHTML = `Your number is ${numberToGuess}?`;
        numberAsked = true;
    } else if(numberAsked && !greaterAsked) {
        answerElement.innerHTML = `Your number is greater than ${numberToGuess}?`;
        greaterAsked = true;
    } 
}

function calculateNumberToGuess(isGreater) {
    if(numberAsked && greaterAsked) {
        if(isGreater) {
            lowLimit = numberToGuess + 1;
            numberToGuess = numberToGuess + addition;
        } else {
            highLimit = numberToGuess - 1;
            numberToGuess = numberToGuess - addition;
        }

        if(addition === 0)
            addition = 1;
        else if(addition !== 1)
            addition = parseInt(addition / 2);
        
        numberAsked = false;
        greaterAsked = false;
    }
}

function restartGuessGame() {
    document.getElementById("guess-text").classList.remove("d-none");
    document.getElementById("guess-game").classList.add("d-none");
    numberAsked = false;
    greaterAsked = false;
    numberToGuess = 50;
    addition = 25;
    lowLimit = 1;
    highLimit = 100;
}

// **************************************************************************************
// Calculate date functions
// **************************************************************************************

function updateValidDays() {
    const year = parseInt( document.getElementById("year").value );
    const month = parseInt( document.getElementById("month").value ) + 1;
    const days = new Date(year, month, 0).getDate();
    const selectList = document.getElementById("day");

    // Deleting all the options created before
    while (selectList.firstChild)
        selectList.removeChild(selectList.firstChild);

    // Deleting last text
    document.getElementById("today").innerText = "";

    // Creating the days of the month
    if(isNaN(year)) {
        const option = document.createElement("option");
        option.value = "invalid";
        option.text = "Choose a day";
        selectList.appendChild(option);
    } else 
        for (let i = 1; i <= days; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = i;
            selectList.appendChild(option);
        }
}

function calculateDay() {
    const year = parseInt( document.getElementById("year").value );
    const month = parseInt( document.getElementById("month").value );
    const day = parseInt( document.getElementById("day").value );
    const todayElement = document.getElementById("today");

    if(isNaN(year) || year < 1 || year > 9999)
        todayElement.innerText = "You haven't entered a valid year";
    else if(isNaN(day))
        todayElement.innerText = "You haven't chosen a day";
    else {
        const today = new Date(year, month, day).getDay();
        todayElement.innerText = dayToNumber(today) + calculateLeapYear(year);
        todayElement.classList.remove("text-danger");
    }
}

function calculateLeapYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
        return ` (${year} is a leap-year)`;
    else
        return ` (${year} is a normal year)`;
}

function dayToNumber(day) {
    switch(day) {
        case 0:
            return "Sunday, it's a day where you rest";
        case 1:
            return "Monday, it's a day where you work";
        case 2:
            return "Tuesday, it's a day where you work";
        case 3:
            return "Wednesday, it's a day where you work";
        case 4:
            return "Thursday, it's a day where you work";
        case 5:
            return "Friday, it's a day where you work";
        case 6:
            return "Saturday, it's a day where you rest";
    }
}