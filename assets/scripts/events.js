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

button.addEventListener('click', buttonClickHandler.bind(this));

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler.bind(this));
}, 2000);
