function changeTitleName(elementId) {
    const userName = prompt("What's your name?");
    const elementReference = document.getElementById(elementId);
    elementReference.innerHTML = `Hi ${userName}!`;
}