const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 0; i < 5; i++) {
  // display images in the thumbBar
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i + 1}.jpg`);
  thumbBar.appendChild(newImage);

  // click thumb to display that image
  newImage.onclick = function (e) {
    const clickedSrc = e.target.getAttribute('src');
    displayedImage.setAttribute('src', clickedSrc);
  };
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
};
