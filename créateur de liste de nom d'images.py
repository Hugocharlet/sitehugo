import os
import json



# Répertoire contenant les images
images_dir = r'C:\Users\hugo_\OneDrive\Documents\Sitehugo\sitehugo\img'

# Liste des extensions d'image que vous souhaitez inclure
image_extensions = ('.jpg', '.jpeg', '.png', '.gif')

def list_image_files(directory):
    # Liste pour stocker les noms des fichiers d'image
    image_files = []
    
    try:
        # Parcourir les fichiers dans le répertoire spécifié
        for filename in os.listdir(directory):
            if filename.lower().endswith(image_extensions):
                image_files.append(filename)
    except FileNotFoundError as e:
        print(f"Erreur : Le répertoire spécifié est introuvable - {e}")
    except PermissionError as e:
        print(f"Erreur : Problème de permission - {e}")
    except Exception as e:
        print(f"Erreur : {e}")
    
    return image_files

def save_to_json(data, file_path):
    # Sauvegarder les données dans un fichier JSON
    try:
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file, indent=2)
    except IOError as e:
        print(f"Erreur lors de l'écriture du fichier JSON - {e}")

if __name__ == '__main__':
    # Liste des fichiers d'image
    images = list_image_files(images_dir)
    
    # Chemin de sortie pour le fichier JSON
    output_file = 'images.json'
    
    # Sauvegarder la liste des fichiers dans un fichier JSON
    save_to_json(images, output_file)
    
    print(f"Liste des images sauvegardée dans {output_file}")
