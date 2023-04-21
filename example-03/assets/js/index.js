function changeNameColor(element, color) {
    const nameReference = document.getElementById(element);
    nameReference.style.color = color;
}

function changeCardColor(element, className) {
    element.classList.add(className);
    element.classList.remove('text-bg-dark');
}

function resetCardsColors(className) {
    const cardsObject = document.getElementsByClassName(className);

    Array.from(cardsObject).forEach(element => {
        element.style.color = "white";

        if(element.classList.contains('text-bg-danger')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-danger');
        } else if(element.classList.contains('text-bg-info')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-info');
        } else if(element.classList.contains('text-bg-success')) {
            element.classList.add('text-bg-dark');
            element.classList.remove('text-bg-success');
        }
    });
}