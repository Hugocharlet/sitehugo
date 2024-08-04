
        function getRandomColor() {
            // Générer une couleur hexadécimale aléatoire
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function applyRandomColor() {
            // Appliquer la couleur aléatoire à l'élément avec la classe 'color-box'
            const colorBox = document.querySelector('.menu-item a:first-child');
            colorBox.style.color = getRandomColor();
        }

        // Appliquer une couleur aléatoire au chargement de la page
        document.addEventListener('DOMContentLoaded', applyRandomColor);

        // Mettre à jour la couleur toutes les 30 secondes
        setInterval(applyRandomColor, 10000);
  