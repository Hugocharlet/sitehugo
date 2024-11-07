document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé avec succès');

    async function fetchRandomURL() {
        try {
            console.log('Fetching random URL...');
            const response = await fetch('/urls-pages.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            
            if (Array.isArray(data) && data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomURL = data[randomIndex];
                console.log('Random URL:', randomURL);
            } else {
                console.error('Le fichier JSON est vide ou mal formé.');
            }
        } catch (error) {
            console.error('Erreur lors du chargement du fichier JSON:', error);
        }
    }

    const previousProjectLink = document.getElementById('previousproject');
    const nextProjectLink = document.getElementById('nextproject');
    const detailsPageLink = document.querySelector('a[href="details.html"]');

    if (previousProjectLink) {
        previousProjectLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Previous project clicked');
            fetchRandomURL();
        });
    } else {
        console.error('Élément avec ID "previousproject" non trouvé');
    }

    if (nextProjectLink) {
        nextProjectLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Next project clicked');
            fetchRandomURL();
        });
    } else {
        console.error('Élément avec ID "nextproject" non trouvé');
    }

    if (detailsPageLink) {
        detailsPageLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Details page clicked');
            fetchRandomURL();
        });
    } else {
        console.error('Élément avec href "details.html" non trouvé');
    }
});