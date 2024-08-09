import os
import json

def generate_image_list(directory):
    try:
        # Obtenir le répertoire courant du script
        base_path = os.path.abspath(directory)
        
        # Liste des fichiers dans le répertoire
        image_files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        
        # Filtrer les fichiers d'images (vous pouvez ajuster les extensions selon vos besoins)
        image_files = [f for f in image_files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
        
        # Créer la liste des chemins relatifs
        relative_paths = [os.path.join('imgCarrousel', f).replace('\\', '/') for f in image_files]
        
        # Créer le contenu JSON
        json_content = json.dumps(relative_paths, indent=4)
        
        # Afficher le contenu JSON dans la console
        print(json_content)
    
    except Exception as e:
        print(f'Erreur lors de la génération du contenu JSON : {e}')

# Spécifiez le chemin du répertoire contenant les images
image_directory = r'C:\wamp64\www\sitehugo\imgCarrousel'  # Chemin absolu du dossier des images

# Appeler la fonction pour générer et afficher le JSON
generate_image_list(image_directory)
