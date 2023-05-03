// Reference to the HTML form
const formReference = document.forms["register"];

// Get a value of a form
const getFormValue = (name) => formReference.elements[name].value || "None";

// On submit form
formReference.addEventListener("submit", event => {
  event.preventDefault()
  console.log(event);
  
  const user = {
    email: getFormValue("inputEmail4"),
    password: getFormValue("inputPassword4"),
    address: getFormValue("inputAddress"),
    city: getFormValue("inputCity"),
    zip: getFormValue("inputState"),
    state: getFormValue("inputZip"),
    check: formReference.elements["gridCheck"].checked
  };
  console.log(user);
});