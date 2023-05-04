// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Promises
// Object that represents the success or failure of asynchronous callback function
// We can consume it in two ways: then-catch-finally or async-await
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Callback functions receives an object, array or string
const promise = new Promise((resolve, reject) => {
    const underAge = true;
    underAge ? resolve("Be always together") : reject("I don't know who you're");
});

// To invoke a promise we use then, catch and finally
promise.then(response => console.log("Promise resolved:", response))
    .catch(error => console.error("Promise rejected:", error))
    .finally(console.warn("Promise finally ended!"));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Then, catch and finally for promises consumption
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Promise that divides two numbers, if the result is zero return that cannot be divided
const divideTwoNumbersPromise = (firstNum, secondNum) =>
    new Promise((resolve, reject) => {
        if(secondNum !== 0)
            setTimeout(() => resolve(`${firstNum} between ${secondNum} is ${firstNum / secondNum}`), 1000);
        else
            setTimeout(() => reject(`${firstNum} cannot be divided between ${secondNum}`), 1000);
    });

// Simple then and catch
divideTwoNumbersPromise(10, 0)
    .then(response => console.log(response))
    .catch(error => console.error(error));

// Multiple then with common catch
divideTwoNumbersPromise(10, 4)
    .then(response => {
        console.log("Then No.1 is:", response);
        return response;
    })
    .then(response => console.log("Then No.2 is:", response))
    .catch(error => console.error(error));

// Multiple then with multiple catch
divideTwoNumbersPromise(25, 32)
    .then(response => { throw "Error on promise" })
    .catch(error => console.error(error))
    .then(response => console.log("Then No.2 after throw is:", response))
    .catch(error => console.error(error));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Async and await for promises consumption with synchronous statements
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Async converts synchronous function to asynchronous
(async () => {
    console.log("xxxxxxx Synchronous Code Before Promise xxxxxxx");

    try {
        // Await stops the code until de promise is resolved or rejected
        const result = await divideTwoNumbersPromise(20, 5);
        console.log("Async-await try:", result);
    } catch (error) {
        console.error("Async-await catch:", error);
    } finally {
        console.warn("Async-await finally: ended")
    }

    console.log("xxxxxxx Synchronous Code After Promise xxxxxxx");
}) ();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Promises alternative declaration
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Promise.resolve doesn't return reject, so we don't need a catch
const alternativePromise = Promise.resolve(123);

// With then
alternativePromise.then(response => console.log("Then promise:", response));

// With async-await
(async () => console.log("Async-await try:", await alternativePromise)) ();