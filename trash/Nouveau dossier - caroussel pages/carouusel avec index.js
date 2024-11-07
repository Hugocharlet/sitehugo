//Images du projets

const listImages = [];
let currentIndex = 0; // Corrigé pour être mutable

// Fonction pour vérifier si une image existe
function checkImage(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false); // false pour un appel synchrone

    xhr.onload = function () {
        if (xhr.status === 200) {
            listImages.push(url); // Si l'image existe, ajoute l'URL à la liste
        }
    };

    xhr.onerror = function () {
        console.error(`Erreur lors de la récupération de l'image : ${url}`);
    };

    xhr.send(); // Envoie la requête
}

// Fonction principale pour récupérer les images
function fetchImages() {
    for (let i = 1; i <= 20; i++) {
        // Créer l'URL de l'image
        const imageUrl = `${newUrl}${i}.jpg`; // Changez l'extension si nécessaire
        checkImage(imageUrl); // Vérifie l'image
    }

    // Afficher les fichiers d'images trouvés
    console.log("Images trouvées :", listImages);

    // Une fois les images récupérées, initialiser le carrousel
    if (listImages.length > 0) {
        // Vérifier si des images ont été trouvées
        initCarousel();
    } else {
        console.warn("Aucune image trouvée pour initialiser le carrousel.");
    }
}

// Fonction pour créer l'index cliquable
function createIndex() {
    const indexContainer = document.getElementById("index-container");
    indexContainer.innerHTML = ""; // Réinitialiser l'index

    console.log(`Création de l'index pour ${listImages.length} images.`);

    listImages.forEach((_, index) => {
        const span = document.createElement("span");
        span.innerText = index + 1; // Afficher le numéro de l'image

        // Ajouter un gestionnaire d'événement pour chaque span
        span.onclick = () => {
            console.log(`Index cliqué: ${index + 1}`); // Message de débogage
            currentIndex = index;
            const img = document.querySelector("#image-container-process img");
            img.src = listImages[currentIndex]; // Met à jour la source de l'image
            console.log(`Image mise à jour : ${img.src}`); // Message de débogage
        };

        indexContainer.appendChild(span);
        console.log(`Ajout de l'index : ${index + 1}`); // Message de débogage
    });
}

// Fonction pour initialiser le carrousel
function initCarousel() {
    const imageContainer = document.getElementById("image-container-process");
    const img = document.createElement("img");

    // Ajouter l'image au conteneur
    img.src = listImages[currentIndex]; // Affiche la première image
    img.className = "imageLarge"; // Appliquer la classe imageLarge
    imageContainer.appendChild(img);
    console.log(`image chargée : ${img.src}`);

    // Ajouter un événement de clic sur l'image
    img.onclick = nextImage;

    // Créer les index cliquables
    createIndex(); // Appeler createIndex ici
}

// Fonction pour passer à l'image suivante
function nextImage() {
    currentIndex = (currentIndex + 1) % listImages.length; // Retour au début après la dernière image
    const img = document.querySelector("#image-container-process img");
    img.src = listImages[currentIndex]; // Met à jour la source de l'image
}

// Lancer la récupération des images
fetchImages();