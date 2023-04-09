import throttle from 'lodash.throttle';



const local = document.querySelector(".feedback-form");
const emailValue = local.querySelector("input");
const messageValue = local.querySelector("textarea")

const { email = '', message = '' } = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailValue.value = email;
messageValue.value = message;

const saveState = throttle(() => {
  const state = { email: emailValue.value, message: messageValue.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

local.addEventListener('input', saveState);

local.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailValue.value = '';
  messageValue.value = '';
});


