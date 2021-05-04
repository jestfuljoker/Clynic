const btnSignIn = document.querySelector('#signin');
const btnSignUp = document.querySelector('#signup');
const body = document.querySelector('body');

btnSignIn.addEventListener('click', () => {
  body.className = 'sign-in-js'
});

btnSignUp.addEventListener('click', () => {
  body.className = 'sign-up-js'
});