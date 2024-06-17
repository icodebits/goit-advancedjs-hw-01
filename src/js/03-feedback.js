import throttle from 'lodash.throttle';

const FORM_STATE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(FORM_STATE_KEY, JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const savedState = localStorage.getItem(FORM_STATE_KEY);
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email || '';
    messageTextarea.value = message || '';
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);
  localStorage.removeItem(FORM_STATE_KEY);
  form.reset();
};

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormState);
