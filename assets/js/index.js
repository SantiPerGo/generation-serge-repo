function changeGreeting() {
    // Get user name with prompt
    const userName = getUserName();

    // Get reference to h1
    const greetingReference = getElementReference("greeting");

    // Change greeting
    setGreetingName(greetingReference, userName);
}

function getUserName() {
    return prompt("Write your name:");
}

function getElementReference(name) {
    return document.getElementById(name);
}

function setGreetingName(elementReference, userName) {
    elementReference.innerHTML = `Hello ${userName}`;
}