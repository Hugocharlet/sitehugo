// Importer la barre de naviguation générale:
//
// Importer son style:
const navbarStyle = document.createElement("link");
navbarStyle.rel = "stylesheet";
navbarStyle.href = "navbarstyle.css";
document.head.appendChild(navbarStyle);
console.log("CSS menu chargé");

// séléctionner menu-placeholder
const navbar = document.getElementById("menu-placeholder");

if (navbar) {
  console.log("Div menu-placeholder trouvée");

  // Récupérer l'URL et définir la page active
  const url = window.location.href;
  const pages = {
    details: "details",
    grid: "grid",
    about: "about",
    contact: "contact",
    article: "article",
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
  } else {
    activePage = pages.article;
    console.log("nous sommes sur la page index ou sur une page article");
  }

  // Insérer les éléments de navigation dans la navbar
  const navItems = `
    <nav class="${activePage ? activePage : ""}">
        <a href="https://www.hugocharlet.com/" class="nav-header" aria-label="homepage" > Hugo Charlet </a>
        <div class="navlinks-container ${activePage ? activePage : ""}">
            <a class="${
              activePage === pages.details ? "active" : ""
            }" href="grid" >WORK</a>
            <a class="${
              activePage === pages.about ? "active" : ""
            }" href="about">ABOUT</a>
            <a class="${
              activePage === pages.contact ? "active" : ""
            }" href="contact">CONTACT</a> </div>
        <button type="button" class="hamburger" aria-label="Toggle Navigation" aria-expanded="false" >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
    <a href="https://www.instagram.com/hugocharletb/" target="_blank" aria-label="Hugo Charlet Instagram" >
        <img id="instagramLogo" src="insta.svg" alt="Instagram" class="instagram-logo" style="max-width: 30px;" />
    </a>


`;

  navbar.innerHTML = navItems;

  // Charger le menu SVG si on est sur la page "details" ou "grid"
  if (activePage === "grid") {
    // Insérer les éléments SVG dans le conteneur après avoir vérifié activePage
    const svgContainer = document.getElementById("svgmenu-placeholder");

    const svgItems = `
      <section class="filter-wrapper">
        <section id="filters">
          <div id="all" class="active">All</div>
          <div id="chair" class="inactive">Chair</div>
          <div id="armchair" class="inactive">Armchair</div>
          <div id="table" class="inactive">Table</div>
          <div id="desk" class="inactive">Desk</div>
          <div id="metal" class="inactive">Metal</div>
          <div id="wood" class="inactive">Wood</div>
          <div id="fabric" class="inactive">Fabric</div>
          <div id="lighting" class="inactive">Lightings</div>
          <div id="object" class="inactive">Objects</div>
        </section>
    
        <div class="svg-container" >
                  <a href="details"  style="${ activePage === "details" ? "filter: brightness(0);" : "" }">
                      <img src="grid-details.svg" alt="Grid Details"  >
                  </a>
                  <a href="grid"  style="${ activePage === "grid" ? "filter: brightness(0);" : "" }"> 
                    <img src="grid-square.svg" alt="Grid Square"  >
                  </a>
              </div>   
        </section>
    `;

    svgContainer.innerHTML += svgItems;
  }
    if (activePage === "details") {
      // Insérer les éléments SVG dans le conteneur après avoir vérifié activePage
      const svgContainer = document.getElementById("svgmenu-placeholder");

      const svgItems = `
      <section class="filter-wrapper">
        <section id="filters">

        </section>
    
        <div class="svg-container" >
                  <a href="details"  style="${
                    activePage === "details" ? "filter: brightness(0);" : ""
                  }">
                      <img src="grid-details.svg" alt="Grid Details"  >
                  </a>
                  <a href="grid"  style="${
                    activePage === "grid" ? "filter: brightness(0);" : ""
                  }"> 
                    <img src="grid-square.svg" alt="Grid Square"  >
                  </a>
              </div>   
        </section>
    `;

      svgContainer.innerHTML += svgItems;
    }
} else {
  console.log("Div navbar non trouvée");
}

// Quand le CSS est chargé, rends le menu visible
navbarStyle.onload = () => {
  // Sélectionne les éléments à afficher
  document
    .querySelectorAll(".menu-container, .instagram-logo")
    .forEach((el) => {
      el.style.display = "block"; // Rend le menu et l'icône Instagram visibles
    });
};
//----------HAMBURGER ANIMATION ---------------

const HamburgerBtn = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = (e) => {
  // Animation du bouton
  HamburgerBtn.classList.toggle("open");
  console.log("fonction appelée");

  const ariaToggle =
    HamburgerBtn.getAttribute("aria-expanded") === "true" ? "false" : "true";
  HamburgerBtn.setAttribute("aria-expanded", ariaToggle);

  // Slide de la navigation
  navLinksContainer.classList.toggle("open");
};

HamburgerBtn.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 470) {
    navLinksContainer.style.transition = "transform 0.4s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

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
    duration: 1500, // Durée de l'animation (en ms)
    easing: 'ease', // Type d'accélération
  });
};
document.body.appendChild(aosScript);