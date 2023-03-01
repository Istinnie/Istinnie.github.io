En utilisant l'API:  https://randomuser.me/
https://randomuser.me/api/?results=20  pour obtenir 20 utilisateurs

Créer un portfolio de clients aléatoires.

Pour cela, stocker les utilisateurs dans un tableau en utilisant une fonction pour aller rechercher les utilisateurs.
On crée un tableau vide (let users = [] ;)
On récupère les users dans la variable data de la requête effectuée avec fetch:
fetch("http://URL ..... ")
.then((response) => response.json())
.then((data) => TODO STOCKER DATA DANS USERS);



Créer une fonction pour afficher les utilisateurs dans le body.
CREER UNE INTERFACE AVEC HTML ET CSS. Ajouter dans cette interface des éléments créés à partir des informations contenues dans users.



Les informations à faire afficher : 
- Si c'est un homme ou une femme en utilisant : "gender": "male",

- Le nom et le prénom ("name": {        "title": "Mr",
        "first": "Jorge",  --> Prénom
        "last": "Alvarez" --> Nom
      },)
- email 
- photo profil : "picture": {        "large": "https://randomuser.me/api/portraits/men/82.jpg&quot;,
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg&quot;, <-- a utiliser
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg&quot;. 
      },
