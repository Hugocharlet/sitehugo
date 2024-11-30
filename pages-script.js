
// Une fois le contenu inséré, vérifier et remplir la navbar


const navsvg = document.getElementById("svgmenupages-placeholder");
// Insérer les éléments de navigation dans la navbar
const svgItems = `
        <div class="svg-container-pages">
            <a href="details">
                <img src="arrowback.svg" alt="backarrow" class="svg-backarrow">
            </a>
        </div>
            `;
navsvg.innerHTML = svgItems;

// Récupérer le nom du dépôt (si présent) et le fichier actuel sans l'extension
const pathParts = window.location.pathname.split("/");

// Vérifier si le dépôt est inclus dans le chemin
const isGitHubPages = pathParts[1] === "sitehugo"; // Remplacer par le nom de ton dépôt

// Récupérer le nom de la page (fichier HTML sans extension)
const currentPage = isGitHubPages
  ? pathParts.pop().split(".")[0]
  : pathParts.pop().split(".")[0];

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
    `${newUrl}1.jpg`,
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
    `${newUrl}17.jpg`,
  ];

  const loader = document.getElementById("loader");

  preloadImages(mediaFiles)
    .then((images) => {
      let imageContainer = document.getElementById("image-container");
      images.forEach((img) => {
        if (img) {
          img.classList.add("imagelarge");
          img.setAttribute("data-aos", "fade-up"); // Add the data-aos attribute
          img.alt =
            "Picture of ${document.title}, original design by French designer Hugo Charlet";
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
//BALISE META GOOGLE
metaforgoogle = `
    <meta property="og:url" content="${newUrl}" />
    <meta property="og:type" content="website" />
`;

document.head.insertAdjacentHTML("beforeend", metaforgoogle);

// Ajouter le lien CSS de AOS pour les animations
const aosStylesheet = document.createElement('link');
aosStylesheet.rel = 'stylesheet';
aosStylesheet.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
document.head.appendChild(aosStylesheet);

// Ajouter le script JS de AOS
const aosScript = document.createElement('script');
aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
aosScript.onload = () => {
  // Initialiser AOS une fois le script chargé
    AOS.init({
    duration: 2500, // Durée de l'animation (en ms)
    easing: 'ease', // Type d'accélération
  });
};
document.body.appendChild(aosScript);

