Objectif du projet : Afficher aléatoirement des paroles/citations connues de rappeurs/personnalités, ...

Objectif pédagogique : 

- Maitriser l'utilisation des tableaux en javascript 
- Utiliser des méthodes de javascript (Math.random(), Math.floor() )
- Connaitre la manipulation de données aléatoires
Stocker dans un tableau des citations voulues.
Exploiter le tableau afin de récupérer une citation aléatoirement.
Afficher ce projet par l'intermédiaire d'une UI ergonomique (Interface).

Version 1 : 
Un bouton que l'on clique dessus et dessous un texte qui s'affiche contenant la citation.

Version 2: 
Toutes les 5 secondes, une nouvelle citation est affichée. (remplace l'ancienne)

Version 3:
Au lieu de stocker manuellement les citations, aller chercher en ligne (via une api par exemple celle de https://pokeapi.co/) les textes et les afficher aléatoirement.
N.B : Récupérer une valeur aléatoire dans un tableau :
var myArray = ['one', 'two', 'three', 'four', 'five'];

var rand = Math.floor(Math.random()*myArray.length);

var rValue = myArray[rand];
console.log(rValue)
