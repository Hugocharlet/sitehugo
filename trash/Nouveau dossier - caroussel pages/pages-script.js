// Charger le contenu de menugenerale.html
fetch('menugenerale.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('menu-placeholder').innerHTML = data;
        console.log('Contenu HTML chargé :');

        // Une fois le contenu inséré, vérifier et remplir la navbar
        const navbar = document.getElementById("navbar");

        if (navbar) {
            console.log("Div navbar trouvée");

            // Récupérer l'URL et définir la page active
            const url = window.location.href;
            const pages = {
                details: "details",
                grid: "grid",
                about: "about",
                contact: "contact"
            };
            let activePage = "";

            if (url.includes(pages.details)) {
                activePage = pages.details;
                console.log("nous sommes sur la page details");
            } else if (url.includes(pages.grid)) {
                activePage = pages.grid;
                console.log("nous sommes sur la page grid");
            } else if (url.includes(pages.about)) {
                activePage = pages.about;
                console.log("nous sommes sur la page about");
            } else if (url.includes(pages.contact)) {
                activePage = pages.contact;
                console.log("nous sommes sur la page contact");
            }

            // Insérer les éléments de navigation dans la navbar
            const navItems = `
                <div class="menu-container ${activePage ? activePage : ""}">
                    <div class="menu">
                        <a style="text-decoration: none" href="https://www.hugocharlet.com/">
                            <span class="bold">Hugo Charlet</span>
                        </a>
                        <a class="menu-item ${activePage === pages.details ? "active" : ""}" href="https://www.hugocharlet.com/details">WORK</a>
                        <a class="menu-item ${activePage === pages.about ? "active" : ""}" href="https://www.hugocharlet.com/about/">ABOUT</a>
                        <a class="menu-item ${activePage === pages.contact ? "active" : ""}" href="https://www.hugocharlet.com/contact/">CONTACT</a>
                    </div>
                </div>
            `;

            navbar.innerHTML = navItems;
        } else {
            console.log("Div navbar non trouvée");
        }
    })
    .catch(error => {
        console.error('Erreur lors du chargement du menu général :', error);
    });

// Charger le contenu du menu SVG
fetch('svgmenupages.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('svgmenu-placeholder').innerHTML = data;
        console.log('Menu SVG chargé');
    })
    .catch(error => {
        console.error('Erreur lors du chargement du menu SVG :', error);
    });



// Récupérer le nom du dépôt (si présent) et le fichier actuel sans l'extension
const pathParts = window.location.pathname.split("/");

// Vérifier si le dépôt est inclus dans le chemin
const isGitHubPages = pathParts[1] === "sitehugo"; // Remplacer par le nom de ton dépôt

// Récupérer le nom de la page (fichier HTML sans extension)
const currentPage = isGitHubPages ? pathParts.pop().split(".")[0] : pathParts.pop().split(".")[0];

// Créer l'URL en utilisant ce nom
const newUrl = `pages/${currentPage}/`;

// Afficher une description dans la console
console.log(`L'URL générée est : ${newUrl}`);


  

//model viewer

document.addEventListener("DOMContentLoaded", () => {
    const modelViewerLink = document.querySelectorAll("#ouvrir-model-viewer");
    const modelContainer = document.getElementById("modelContainer");
    const closeButton = document.getElementById("closeModelViewer");
    const modelViewer = document.getElementById("modelViewer");

    modelViewerLink.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const modelSrc = link.getAttribute("data-model-src");
            if (modelSrc) {
                modelViewer.setAttribute("src", modelSrc);
                modelContainer.classList.toggle("show");
            }
        });
    });

    closeButton.addEventListener("click", () => {
        modelContainer.classList.remove("show");
    });

    // Vous n'avez pas d'élément 'overlay' dans votre HTML actuel
    // Si vous avez un élément d'overlay, décommentez ces lignes :
    // overlay.addEventListener('click', () => {
    //     modelContainer.classList.remove('show');
    // });
});

//Images du projets

function preloadImages(imageUrls) {
    return Promise.all(
        imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(img); // Résoudre avec l'image chargée
                img.onerror = () => resolve(null); // Ignorer les erreurs et résoudre avec null
            });
        })
    );
}

document.addEventListener("DOMContentLoaded", () => {
    let mediaFiles = [
        `${newUrl}1.jpeg`,
        `${newUrl}2.jpg`,
        `${newUrl}3.jpg`,
        `${newUrl}4.jpg`,
        `${newUrl}5.jpg`,
        `${newUrl}6.jpg`,
        `${newUrl}7.jpg`,
        `${newUrl}8.jpg`,
        `${newUrl}9.jpg`,
        `${newUrl}10.jpg`,
        `${newUrl}11.jpg`,
        `${newUrl}12.jpg`,
        `${newUrl}13.jpg`,
        `${newUrl}14.jpg`,
        `${newUrl}15.jpg`,
        `${newUrl}16.jpg`,
        `${newUrl}17.jpg`
    ];

    const loader = document.getElementById("loader");

    preloadImages(mediaFiles)
        .then((images) => {
            let imageContainer = document.getElementById("image-container");
            images.forEach((img) => {
                if (img) {
                    img.classList.add("imagelarge");
                    imageContainer.appendChild(img);
                } else {
                    console.warn("Une image est manquante ou a échoué à se charger.");
                }
            });

            // Cacher le loader après le chargement des images
            loader.style.display = "none";
        })
        .catch((error) => {
            console.error("Erreur lors du préchargement des images :", error);
            loader.style.display = "none";
        });
});

//SCROLLING FONCTION

document.addEventListener("DOMContentLoaded", function () {
    const fixedElement = document.querySelector(".colonne-fixed");
    const mainImage = document.querySelector(".imagemain"); // Sélectionne l'image 'main'

    // Fonction pour calculer et ajuster la position
    const adjustFixedColumnPosition = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const imageHeight = mainImage.offsetHeight; // Hauteur de l'image 'main'

        // Désactiver l'effet si la largeur de l'écran est inférieure à 768px (taille smartphone et iPad)
        if (window.innerWidth >= 768) {
            // Calcule une nouvelle position en soustrayant la hauteur de l'image
            const targetMarginTop = -imageHeight + 50 + scrollY * 1; // Ajuster en fonction du défilement

            // Appliquer le mouvement avec transition
            fixedElement.style.marginTop = `${targetMarginTop}px`;
        } else {
            // Réinitialiser la position pour les petits écrans
            fixedElement.style.marginTop = "20px"; // La position initiale par défaut pour les petits écrans
        }
    };

    // Exécuter la fonction lors du défilement
    document.addEventListener("scroll", adjustFixedColumnPosition);

    // Exécuter la fonction au chargement pour une position initiale correcte
    adjustFixedColumnPosition();
});

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