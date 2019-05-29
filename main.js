const header = document.querySelector("header");
const h1 = document.querySelector('h1');
let image = true;
let title = true;

const changeImage = () => {
 image = !image;
 title = !title;
 header.style.backgroundImage = image ? "url(drink.jpg)" : "url(bulding.jpg)";
 h1.textContent = title ? "Śniadanie" : "Coś fajnego";

 header.addEventListener("click", changeImage)
}