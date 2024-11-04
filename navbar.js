// Charger le contenu de menugenerale.html
fetch("menugenerale.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then((data) => {
        document.getElementById("menu-placeholder").innerHTML = data;
        console.log("Contenu HTML chargé :");

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
                <div class="menu-container ${activePage ? activePage : ""}">
                    <div class="menu">
                        <a style="text-decoration: none" href="https://www.hugocharlet.com/">
                            <span class="bold">Hugo Charlet</span>
                        </a>
                        <a class="menu-item ${activePage === pages.details ? "active" : ""}" href="https://www.hugocharlet.com/details">WORK</a>
                        <a class="menu-item ${activePage === pages.about ? "active" : ""}" href="https://www.hugocharlet.com/about">ABOUT</a>
                        <a class="menu-item ${activePage === pages.contact ? "active" : ""}" href="https://www.hugocharlet.com/contact">CONTACT</a>
                    </div>
                </div>
            `;

            navbar.innerHTML = navItems;

            // Charger le menu SVG si on est sur la page "details" ou "grid"
            if (activePage === "details" || activePage === "grid") {
                fetch("list-grid.html")
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.text();
                    })
                    .then((data) => {
                        document.getElementById("svgmenu-placeholder").innerHTML = data;
                        console.log("Menu SVG chargé");

                        // Insérer les éléments SVG dans le conteneur après avoir vérifié activePage
                        const svgContainer = document.getElementById("svgcontainer");

                        const svgItems = `
                            <a href="details" class="svg-link" style="${activePage === "details" ? "filter: brightness(0);" : ""}">
                                <img src="grid-details.svg" alt="Grid Details" class="svg-item">
                            </a>
                            <a href="grid" class="svg-link" style="${activePage === "grid" ? "filter: brightness(0);" : ""}">
                                <img src="grid-square.svg" alt="Grid Square" class="svg-item">
                            </a>
                        `;

                        svgContainer.innerHTML += svgItems;
                    })
                    .catch((error) => {
                        console.error("Erreur lors du chargement du menu SVG :", error);
                    });
            }
        } else {
            console.log("Div navbar non trouvée");
        }
    })
    .catch((error) => {
        console.error("Erreur lors du chargement du menu général :", error);
    });
