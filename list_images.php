<?php
// Chemin vers le dossier des images
$dir = 'img/';
$images = [];

// Ouvrir le dossier
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            // Vérifier si le fichier est une image (extension .jpg, .jpeg, .png, .gif)
            if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $file)) {
                $images[] = $file;
            }
        }
        closedir($dh);
    }
}

// Renvoyer la liste des images au format JSON
header('Content-Type: application/json');
echo json_encode($images);
?>
