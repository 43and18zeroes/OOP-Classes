const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = () => {
  console.log('Click');
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);