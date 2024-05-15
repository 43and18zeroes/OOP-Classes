

// button.onclick = function() {

// };



// const anotherButtonClickHandler = () => {
//     console.log('This was clicked!');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
const buttonClickHandler = () => {
    alert('Button was clicked!');
};

const button = document.querySelector('button');
button.addEventListener('click', buttonClickHandler);

// button.removeEventListener();