const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['WTC.jpg', 'butterflypavillion.jpg', 'Cat.jpg', 'centralpark.jpg', 'sunset.jpg', 'Virgil.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'WTC.jpg': 'World Trade Center',
    'butterflypavillion.jpg': 'Butterfly sitting on a shoulder',
    'Cat.jpg': 'Philippe the boujie NY Cat',
    'centralpark.jpg': 'A view in central park',
    'sunset.jpg': 'Sunset in New York',
    'Virgil.jpg': 'Virgil statue at DRAKE Concert'
}

/* Looping through images */
for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });