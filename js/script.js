/////////////////////////////////////////////////////
// DOM SELECTION
const form = document.querySelector('.form');
const inputContainer = document.querySelector('.input-container');
const input = document.querySelector('.input');

// Regex pattern to test email
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/;

/////////////////////////////////////////////////////
// FUNCTIONS

// Function to remove data success
const removeDataSuccess = () => inputContainer.removeAttribute('data-success');

// Function to check if email empty
const isEmailEmpty = email => {
  if (email.length === 0) {
    inputContainer.setAttribute('data-error', 'Email is required');
    return true;
  }
};

// Function to check email validity
const checkEmailValidity = email => {
  // If email is not in valid format set data error with message
  if (!email.match(emailPattern)) {
    inputContainer.setAttribute('data-error', 'Email is Invalid');
    return false;
  }

  // If email is  valid format remove data error
  if (email.match(emailPattern)) {
    inputContainer.removeAttribute('data-error');
    return true;
  }
};

/////////////////////////////////////////////////////
// EVENT LISTENERS

// Listen to form submission
form.addEventListener('submit', function (e) {
  // Prevent default page reload
  e.preventDefault();

  // Remove data success if any
  removeDataSuccess();

  const email = input.value;

  // If Email input is empty set data error with message
  const empty = isEmailEmpty(email);

  // Gaurd clause 'If email is empty return from function'
  if (empty) return;

  // Check for email validity
  const valid = checkEmailValidity(email);

  // Gaurd clause 'If email not valid return from function'
  if (!valid) return;

  //   Set data success with message
  inputContainer.setAttribute('data-success', 'Email received, Thank you. 😊');

  //   Empty input value
  input.value = '';
});

// Listen to input on blur
input.addEventListener('blur', function (e) {
  // Remove data success if any
  removeDataSuccess();

  const email = input.value;

  // If Email input is empty set data error with message
  const empty = isEmailEmpty(email);

  // Gaurd clause 'If email is empty return from function'
  if (empty) return;
});

// Listen to input on change
input.addEventListener('keyup', function (e) {
  // Remove data success if any
  removeDataSuccess();

  const email = input.value;

  // If Email input is empty set data error with message
  const empty = isEmailEmpty(email);

  // Gaurd clause 'If email is empty return from function'
  if (empty) return;

  // Check for email validity
  checkEmailValidity(email);
});
