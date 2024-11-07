// Importer la barre de naviguation générale:
//
// Importer son style:
const navbarStyle = document.createElement("link");
navbarStyle.rel = "stylesheet";
navbarStyle.href = "navbarstyle.css";
document.head.appendChild(navbarStyle);

// Quand le CSS est chargé, rends le menu visible
link.onload = () => {
    // Sélectionne les éléments à afficher
    document.querySelectorAll('.menu-container, .instagram-logo').forEach(el => {
        el.style.display = 'block';  // Rend le menu et l'icône Instagram visibles
    });
};
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
        article: "article"
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
                <div class="menu-container ${activePage ? activePage : ""}" style="display:none">
                    <div class="menu">
                        <a style="text-decoration: none" href="https://www.hugocharlet.com/">
                            <span class="bold">Hugo Charlet</span>
                        </a>
                        <a class="menu-item ${activePage === pages.details ? "active" : ""}" href="https://www.hugocharlet.com/details">WORK</a>
                        <a class="menu-item ${activePage === pages.about ? "active" : ""}" href="https://www.hugocharlet.com/about">ABOUT</a>
                        <a class="menu-item ${activePage === pages.contact ? "active" : ""}" href="https://www.hugocharlet.com/contact">CONTACT</a>
                    </div>
                </div>
                <a href="https://www.instagram.com/hugocharletb/" target="_blank" aria-label="Hugo Charlet Instagram" style="display:none">
                    <img id="instagramLogo" src="insta.svg" alt="Instagram" class="instagram-logo" style="max-width: 30px;" />
                </a>
            `;

    navbar.innerHTML = navItems;

    // Charger le menu SVG si on est sur la page "details" ou "grid"
    if (activePage === "details" || activePage === "grid") {

        
                // Insérer les éléments SVG dans le conteneur après avoir vérifié activePage
                const svgContainer = document.getElementById("svgmenu-placeholder");

                const svgItems = `
                        <div class="top-container" >
                            <div class="svg-container" >
                                <a href="details" class="svg-link" style="${activePage === "details" ? "filter: brightness(0);" : ""}">
                                    <img src="grid-details.svg" alt="Grid Details" class="svg-item" style="max-height: 11px;">
                                </a>
                                <a href="grid" class="svg-link" style="${activePage === "grid" ? "filter: brightness(0);" : ""}">
                                    <img src="grid-square.svg" alt="Grid Square" class="svg-item" style="max-height: 11px;">
                                </a>
                            </div>   
                        </div>
        
        
        
                                        `;

                svgContainer.innerHTML += svgItems;

    }
} else {
    console.log("Div navbar non trouvée");
}