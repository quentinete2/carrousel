let images = [];
let index = 0;

function prev() {
  index = (index - 1 + images.length) % images.length;
  console.log(index)
  afficher();
}

function next() {
  index = (index + 1) % images.length;
  console.log(index)
  afficher();
}

function afficher() {
  const centre = document.getElementById("centre");
  centre.innerHTML = `<img src="${images[index]}" class="carrousel-image">`;
}

fetch('/images')
  .then(res => res.json())
  .then(data => {
    images = data;
    afficher();
  });


