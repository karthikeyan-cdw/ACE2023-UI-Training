// regex validation conditions
const formValidationConditions = {
  firstName: /^[a-zA-Z]{1,30}$/,
  lastName: /^[a-zA-Z]{1,30}$/,
  email: /^([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+){1,50}$/,
  contact: /^[0-9]{10}$/,
  pincode: /^[0-9]{6}$/,
  cardNumber: /^[0-9]{16}$/,
  expiryYear: /^[0-9]{4}$/,
  cvv: /^[0-9]{3,4}$/,
};
// stored error text
const errorText = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  contact: "Contact Number",
  pincode: "PIN Code",
  cardNumber: "Card Number",
  expiryYear: "Card Expiry",
  cvv: "CVV",
};

// Function to validate the form on submit (Not required in this case)
function validateForm() {
  const form = document.querySelector("form");
  const data = new FormData(form).entries();
  let validForm = true;
  for (let [id, value] of data) {
    if (validateInput(id, value) === false) validForm = false;
  }
  if (validForm) {
    alert("Payment Success");
    return true;
  }
  return false;
}

// Function to update the DOM
function updateDOM(
  currElement,
  errorTextClass = "",
  errorStatement = "",
  errorClass = ""
) {
  currElement.nextElementSibling.className = errorTextClass;
  currElement.nextElementSibling.innerHTML = errorStatement;
  currElement.className = errorClass;
}

// Function to validate the input text
function validateInput(id, text) {
  let currElement = document.getElementById(id);
  if (isEmpty(text)) {
    updateDOM(
      currElement,
      "error-text",
      errorText[id] + " is required",
      "error-input"
    );
    return false;
  }
  if (!isValid(id, text)) {
    updateDOM(
      currElement,
      "error-text",
      errorText[id] + " is not valid",
      "error-input"
    );
    return false;
  }
  updateDOM(currElement);
  window.location.href = "./index.html";
  return true;
}

// Function for validation (conditions)
function isValid(id, text) {
  switch (id) {
    case "email":
      return regexValidate(id, text) && text.length <= 50;
    case "expiry_year":
      return regexValidate(id, text) && new Date().getFullYear() <= text;
    default:
      return regexValidate(id, text);
  }
}
// Function for regex based validation
function regexValidate(id, text) {
  return formValidationConditions[id].test(text);
}
// Function to check whether the input is empty
function isEmpty(text) {
  return text === "";
}
