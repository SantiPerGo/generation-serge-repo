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