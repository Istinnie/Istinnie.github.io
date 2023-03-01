1. Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
2. Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
3. Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)



1. Pour créer un rond  en css : 
height: 50px;
width: 50px;
border-radius: 50px;
PS : Oubliez pas la propriété transform: translate(-50%, -50%);  (pour pas que le cercle soit placer par rapport à son centre et non par rapport à son extrémité)


2. Ajouter un évènement sur la fenêtre (window): 
On récupère l'élément (la div par sa classe par exemple) :  

const mousemove = document.querySelector('.nomdelaclasse');
mousemove.style.NOMDELAPROPRIETECSS = "VALEUR DE LA PROPRIETE CSS";
Exemple :  


mousemove.style.background = "black"; //permet de mettre un background noir sur l'élément contenu dans mousemove.
On ajoute l'évènement avec addEventListener('NOMEVENEMENT', (e) ) => {code à exécuter});
Exemple du cours : 
window.addEventListener('mousemove',(e)=>{   
//e contient tout ce qu'il y a dans l'évènement par exemple e.x et e.y renvoient les positions de la souris sur la page
mousemove.style.left = e.x + 'px'; 
mousemove.style.top = e.y + 'px';
});


3. Documentation
https://developer.mozilla.org/fr/docs/Web/CSS/mix-blend-mode
