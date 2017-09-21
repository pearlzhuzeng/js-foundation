const myImage = document.querySelector('img');

myImage.onclick = function () {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/redsquirrel.jpg');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
};

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `MDN is cool, ${myName}`;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `MDN is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
