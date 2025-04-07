const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

var images = [
    { src: "images/sakura1.jpg", alt: "cherry blossom tree close up" },
    { src: "images/sakura2.jpg", alt: "cherry blossom tree in the night" },
    { src: "images/okonomyaki.jpg", alt: "the inside of a restaurant in japan, relaxed vibe" },
    { src: "images/kyoto.jpg", alt: "a picture in kyoto of a temple with sky needle in back" },
    { src: "images/chicken.jpg", alt: "the golden chicken on top of the golden temple in kyoto" }
];



/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i].src);
    newImage.setAttribute('alt', images[i].alt);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function () {
        displayedImage.setAttribute('src', images[i].src);
        displayedImage.setAttribute('alt', images[i].alt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    overlay.classList.toggle('darken');
});