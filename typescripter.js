 document.addEventListener("DOMContentLoaded", function() {
    // Déclaration de l'array de textes à afficher
    const text = ["MAGIQUE", "ÉTONNANT", "CAPTIVANT", "ENCHANTÉ", "ENVOÛTANT"];
    const typingSpeed = 100; // Vitesse de frappe (ms par caractère)
    const erasingSpeed = 50; // Vitesse d'effacement (ms par caractère)
    const initialDelay = 200; // Délai initial avant de commencer à taper (ms)
    const newTextDelay = 2000; // Délai avant de commencer à effacer le mot courant et de taper le suivant (ms)

    let textArrayIndex = 0; // Index pour suivre le mot actuel dans textArray
    let charIndex = 0; // Index pour suivre le caractère actuel dans le mot
    const typewriterSpan = document.getElementById('typewriter'); // Récupération de l'élément avec l'ID "typewriter"

    // Fonction pour taper les caractères un par un
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            // Ajoute le caractère actuel au contenu de l'élément
            typewriterSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed); // Appel récursif pour taper le prochain caractère
        } else {
            setTimeout(erase, newTextDelay); // Attendre avant d'effacer
        }
    }

    // Fonction pour effacer les caractères un par un
    function erase() {
        if (charIndex > 0) {
            // Supprime le dernier caractère du contenu de l'élément
            typewriterSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed); // Appel récursif pour effacer le prochain caractère
        } else {
            textArrayIndex++; // Passer au mot suivant
            if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Boucle sur le premier mot si à la fin du tableau
            setTimeout(type, typingSpeed + 500); // Délai avant de commencer à taper le mot suivant
        }
    }

    typewriterSpan.textContent = ''; // Effacer le texte initial
    setTimeout(type, initialDelay); // Commencer à taper après le délai initial