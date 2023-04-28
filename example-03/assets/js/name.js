function changeTitleName(elementId) {
    const userName = prompt("What's your name?");
    document.getElementById(elementId).innerHTML = userName;
}

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