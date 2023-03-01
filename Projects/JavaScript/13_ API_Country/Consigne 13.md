API : https://restcountries.com/v3.1/all

1. Créer une page HTML /CSS avec :
un input text qui permettra de rechercher (filtrer)
un input range qui servira à déterminer le nombre de résultat que l'on veut afficher
un span qui va afficher la valeur contenu dans le input range précédant.
trois boutons pour trier les données (croissant, décroissant, alphabétique)
2. Créer une fonction fetchCountries qui va aller stocker les pays dans un tableau. (FETCH)

3. Créer une fonction displayCountries  qui va afficher des informations sur chaque pays (MAP):
img du drapeau (format svg)
nom du pays en français (regarder dans translations ... ) 
la capitale
la population
4. Récupérer ce qui est tapé dans input pour filtrer. Utiliser le filter avant le map. Pour vérifier si un texte est contenu dans un autre 
texte il faut utiliser la fonction includes. Par exemple, country.name.includes(inputSearch.value) à adapter en fonction de votre code.

5. Gérer le nombre de pays afficher avec l'input range. Avant le map, vous pouvez utiliser le fonction slice(0, valeurSouhaitée)

6. Terminer l'exercice en gérant le tri en fonction des trois boutons restants. Je vous conseille de créer une variable sortMethod et d'effectuer 
dans la méthode sort des if en fonction de sortMethod. Par exemple, lorsque l'on clique sur le bouton tri croissant, sortMethod = "croissant" 
et dans sort((p1, p2) => { if (sortMethod == "croissant") return p1.population - p2.population ; else if ...
