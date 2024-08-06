function getRandomPastelColor() {
    // Liste des couleurs pastel en format RGB
    const pastelColors = [
        'rgb(231,170,214)',
        'rgb(170,231,177)',
        'rgb(170,176,231)',
        'rgb(170,231,223)',
        'rgb(231,218,170)',
        'rgb(192,231,170)',
        'rgb(218,170,231)',
        'rgb(153,175,229)',
        'rgb(84,135,229)',
        'rgb(128,229,179)',
        'rgb(204,195,140)',
    ];

    // Sélectionner un index aléatoire dans le tableau des couleurs
    const randomIndex = Math.floor(Math.random() * pastelColors.length);

    // Retourner la couleur aléatoire
    return pastelColors[randomIndex];
}

function applyRandomColor() {
    // Appliquer la couleur aléatoire à l'élément avec la classe 'menu-item a:first-child'
    const colorBox = document.querySelector('.menu-item a:first-child');
    if (colorBox) { // Assurez-vous que l'élément existe avant de tenter de modifier sa couleur
        colorBox.style.color = getRandomPastelColor();
    }
}

// Appliquer une couleur aléatoire au chargement de la page
document.addEventListener('DOMContentLoaded', applyRandomColor);

// Mettre à jour la couleur toutes les 10 secondes
setInterval(applyRandomColor, 10000);
