    document.addEventListener('DOMContentLoaded', () => {
            const svgBackButton = document.getElementById('svg-back-button');
            const menuBackButton = document.getElementById('menu-back-button');

            function goBack(event) {
                event.preventDefault(); // Empêche le lien de suivre son href
                window.history.back(); // Retourne à la page précédente
            }

            if (svgBackButton) {
                svgBackButton.addEventListener('click', goBack);
            }

            if (menuBackButton) {
                menuBackButton.addEventListener('click', goBack);
            }
        });
		
	document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
});

let images = [];
let currentImageIndex = 0;

function fetchImages() {
    const folderPath = 'pages/belvedere/'; // Chemin vers le dossier des images
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

            // Initialiser l'affichage de l'image et des numéros
            updateIndicators();
            showImage(currentImageIndex);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement des images :', error);
        });
}

function showImage(index) {
    const imgElement = document.getElementById('galleryImage');
    imgElement.src = images[index];
    updateIndicators(); // Mettre à jour les numéros pour refléter l'image actuelle
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function updateIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    indicatorsContainer.innerHTML = ''; // Vider le conteneur existant

    images.forEach((image, index) => {
        const span = document.createElement('span');
        span.classList.add('numbers');
        if (index === currentImageIndex) {
            span.classList.add('active');
        }
        span.textContent = index + 1;
        span.setAttribute('data-index', index);
        span.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(currentImageIndex);
        });

        indicatorsContainer.appendChild(span);
    });
}

// Appel initial pour mettre à jour les indicateurs
updateIndicators();

