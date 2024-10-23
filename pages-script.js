// Récupérer le nom du dépôt (si présent) et le fichier actuel sans l'extension
const pathParts = window.location.pathname.split('/');

// Vérifier si le dépôt est inclus dans le chemin
const isGitHubPages = pathParts[1] === "sitehugo"; // Remplacer par le nom de ton dépôt

// Récupérer le nom de la page (fichier HTML sans extension)
const currentPage = isGitHubPages ? pathParts.pop().split('.')[0] : pathParts.pop().split('.')[0];

// Créer l'URL en utilisant ce nom
const newUrl = `pages/${currentPage}/`;

// Afficher une description dans la console
console.log(`L'URL générée est : ${newUrl}`);


document.addEventListener('DOMContentLoaded', () => {
    // Importer le menu général
    fetch('menugenerale.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
            console.log('Menu général chargé');
        })
        .catch(error => {
            console.error('Erreur lors du chargement du menu général :', error);
        });

    // Importer le menu SVG
fetch('svgmenupages.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);  // Log le contenu pour vérifier ce qui est chargé
        document.getElementById('svgmenupages-placeholder').innerHTML = data;
        console.log('Menu SVG chargé');
    })
    .catch(error => {
        console.error('Erreur lors du chargement du menu SVG :', error);
    });
    console.log('Scripts de chargement des menus initialisés');
});


		//model viewer

	document.addEventListener('DOMContentLoaded', () => {
    const modelViewerLink = document.querySelectorAll('#ouvrir-model-viewer');
    const modelContainer = document.getElementById('modelContainer');
    const closeButton = document.getElementById('closeModelViewer');
    const modelViewer = document.getElementById('modelViewer');

    modelViewerLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const modelSrc = link.getAttribute('data-model-src');
            if (modelSrc) {
                modelViewer.setAttribute('src', modelSrc);
                modelContainer.classList.toggle('show');
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modelContainer.classList.remove('show');
    });

    // Vous n'avez pas d'élément 'overlay' dans votre HTML actuel
    // Si vous avez un élément d'overlay, décommentez ces lignes :
    // overlay.addEventListener('click', () => {
    //     modelContainer.classList.remove('show');
    // });
});
	
document.addEventListener('DOMContentLoaded', function() {
    const fixedElement = document.querySelector('.colonne-fixed');
    const mainImage = document.querySelector('.imagemain'); // Sélectionne l'image 'main'

    // Fonction pour calculer et ajuster la position
    const adjustFixedColumnPosition = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const imageHeight = mainImage.offsetHeight; // Hauteur de l'image 'main'

        // Désactiver l'effet si la largeur de l'écran est inférieure à 768px (taille smartphone et iPad)
        if (window.innerWidth >= 768) {
            // Calcule une nouvelle position en soustrayant la hauteur de l'image
            const targetMarginTop = -imageHeight + 50+ scrollY * 1; // Ajuster en fonction du défilement

            // Appliquer le mouvement avec transition
            fixedElement.style.marginTop = `${targetMarginTop}px`;
        } else {
            // Réinitialiser la position pour les petits écrans
            fixedElement.style.marginTop = '20px'; // La position initiale par défaut pour les petits écrans
        }
    };

    // Exécuter la fonction lors du défilement
    document.addEventListener('scroll', adjustFixedColumnPosition);

    // Exécuter la fonction au chargement pour une position initiale correcte
    adjustFixedColumnPosition();
});
