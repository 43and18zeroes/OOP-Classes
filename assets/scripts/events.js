// const button = document.querySelector('button');

// button.onclick = function() {

// };

// const buttonClickHandler = (event) => {
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log('This was clicked!');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// const buttonClickHandler = event => {
//   console.log(event);
// };

// button.addEventListener('click', buttonClickHandler);

// const buttons = document.querySelectorAll('button');

// const buttonClickHandler = (event) => {
//   event.target.disabled = true;
//   console.log(event);
// };

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', (event) => {
//   console.log(event);
// });

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(event);
// });

// const bubbleBtn = document.getElementById('bubbleBtn');
// const bubbleSec = document.getElementById('bubbleSec');

// function bubbleBtnClickHandler() {
//   console.log('bubbleBtn');
// }

// function bubbleSecClickHandler() {
//   console.log('bubbleSec');
// }

// bubbleBtn.addEventListener('click', bubbleBtnClickHandler);
// bubbleSec.addEventListener('click', bubbleSecClickHandler);

// const button = document.querySelector('button');
// const div = document.querySelector('div');

// button.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('CLICKED BTN');
//   console.log(event);
// });

// div.addEventListener('click', (event) => {
//   console.log('CLICKED DIV');
//   console.log(event);
// });

// const listItems = document.querySelectorAll('li');

// const list = document.querySelector('ul');

// list.addEventListener('click', event => {
//   event.target.closest('li').classList.toggle('highlight');
// });

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// button.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('CLICKED BTN');
//   console.log(event);
// });

const form = document.querySelector('form');
const button = document.querySelector('form button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('SUBMIT FORM');
});

button.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('CLICKED BTN');
});

const list = document.querySelector('ul');

list.addEventListener('click', event => {
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
});