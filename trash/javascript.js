// Tableau contenant les chemins vers les images
let images = [];

// Récupérer toutes les images du dossier 'img/'
fetchImages();

function fetchImages() {
  const folderPath = 'img/'; // Chemin vers le dossier des images
  fetch(folderPath)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, 'text/html');
      const imageElements = htmlDocument.getElementsByTagName('a');

      images = [];
      for (let i = 0; i < imageElements.length; i++) {
        const filename = imageElements[i].getAttribute('href');
        if (filename.endsWith('.jpg') || filename.endsWith('.jpeg') || filename.endsWith('.png') || filename.endsWith('.gif')) {
          images.push(folderPath + filename);
        }
      }

      // Initialiser l'affichage de l'image
      showRandomImage();
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors du chargement des images :', error);
    });
}

let currentImageIndex = 0;

function showRandomImage() {
  currentImageIndex = getRandomIndex();
  showImage(currentImageIndex);
}

function showImage(index) {
  const imgElement = document.getElementById('galleryImage');
  imgElement.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function getRandomIndex() {
  return Math.floor(Math.random() * images.length);
}

// Initialisation de l'affichage de l'image aléatoire
showRandomImage();
