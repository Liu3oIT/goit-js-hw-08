import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const feedbackStateKey = 'feedback-form-state';

let formState = {};
const savedFormState = localStorage.getItem(feedbackStateKey);
if (savedFormState) {
  formState = JSON.parse(savedFormState);
  emailInput.value = formState.email;
  messageInput.value = formState.message;
}

const saveFormState = throttle(() => {
  formState.email = emailInput.value.trim();
  formState.message = messageInput.value.trim();
  localStorage.setItem(feedbackStateKey, JSON.stringify(formState));
}, 500);

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

const handleFormSubmit = event => {
  event.preventDefault();

  const { email, message } = formState;

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  if (!message) {
    alert('Please enter your comment.');
    return;
  }
  console.log(`Email: ${email} , Commend: ${message}`);

  form.reset();
  localStorage.removeItem(feedbackStateKey);
};

form.addEventListener('submit', handleFormSubmit);
