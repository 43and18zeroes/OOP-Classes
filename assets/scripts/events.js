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

const buttons = document.querySelectorAll('button');

const buttonClickHandler = (event) => {
  console.log(event);
};

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
})