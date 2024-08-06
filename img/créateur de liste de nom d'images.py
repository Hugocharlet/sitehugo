import os
import json

def list_image_files(directory, image_extensions):
    image_files = []
    try:
        # Vérifiez si le répertoire existe
        if not os.path.isdir(directory):
            raise FileNotFoundError(f"Le répertoire spécifié n'existe pas : {directory}")

        # Parcourir les fichiers dans le répertoire
        for filename in os.listdir(directory):
            if filename.lower().endswith(image_extensions):
                # Ajouter seulement le nom du fichier à la liste
                image_files.append(filename)
    except FileNotFoundError as e:
        print(f"Erreur : {e}")
    except PermissionError as e:
        print(f"Erreur : Problème de permission - {e}")
    except Exception as e:
        print(f"Erreur : {e}")
    
    return image_files

def save_to_json(data, file_path):
    try:
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file, indent=2)
    except IOError as e:
        print(f"Erreur lors de l'écriture du fichier JSON - {e}")

def convert_json_guillemets_simples(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        
        content = content.replace('"', "'")
        
        with open(file_path, 'w') as file:
            file.write(content)
    except IOError as e:
        print(f"Erreur lors de la conversion du fichier JSON - {e}")

if __name__ == '__main__':
    # Demander à l'utilisateur de saisir le chemin du répertoire et le nom du fichier JSON
    images_dir = r"C:\Users\hugo_\OneDrive\Documents\Sitehugo\sitehugo\img"
    output_file = "images.json"

    # Liste des extensions d'image à inclure
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif')

    # Liste des fichiers d'image
    images = list_image_files(images_dir, image_extensions)
    
    # Sauvegarder la liste des fichiers dans un fichier JSON
    save_to_json(images, output_file)
    
   
  
    
    print(f"Liste des noms des images sauvegardée dans {output_file}")
