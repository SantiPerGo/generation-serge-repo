// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Concurrent   - One thread, multiple functions with asynchronous calls
// Parallel     - Multiple threads, multiple functions
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Synchronous functions
// One instruction after other
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const firstStep = () => console.log("01 - Program Start");
const secondStep = () => console.log("02 - Program Development");
const thirdStep = () => console.log("03 - Program End");

firstStep();
secondStep();
thirdStep();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Asynchronous functions
// Functions running at different times
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// setTimeout() - executes a callback function after a time delay
// setTimeout(callback function, time delay, function parameters)
console.log("xxxxxxxxxxxx setTimeout xxxxxxxxxxxx");
const secondStepTimeout = greeting => setTimeout(() => console.log("Hi", greeting), 4000);
firstStep();
secondStepTimeout("ch26 with 4 seconds of delay");
thirdStep();

// setInterval() - executes a function continuously every time delay
// setInterval(callback function, time delay, function parameters)
console.log("xxxxxxxxxxxx setInterval xxxxxxxxxxxx");
const secondStepInterval = greeting => setInterval(() => console.log("Bye", greeting), 4000);

// Start and stop interval
const buttonStartElement = document.getElementById("button-start");
const buttonStopElement = document.getElementById("button-stop");
const dateElement = document.getElementById("date");
let intervalId;

buttonStartElement.addEventListener("click" , () => {
    dateElement.innerHTML = "Loading...";
    intervalId = setInterval(() => dateElement.innerHTML = new Date().toLocaleTimeString(), 1000);
    buttonStartElement.disabled = true;
    buttonStopElement.disabled = false;
});

buttonStopElement.addEventListener("click" , () => {
    dateElement.innerHTML = "Press the button below to get hour...";
    clearInterval(intervalId);
    buttonStopElement.disabled = true;
    buttonStartElement.disabled = false;
});