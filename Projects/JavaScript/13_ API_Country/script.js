// code pour récupérer les latitude et longitude

let sortMethod ="alpha";

getRangeValue();

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}


// faire une requête API
function fetchCountry(){
    fetch(" https://restcountries.com/v3.1/all")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        // 4. Récupérer ce qui est tapé dans input pour filtrer. Utiliser 
        // le filter avant le map. Pour vérifier si un texte est contenu dans 
        // un autre texte il faut utiliser la fonction includes. Par exemple, 
        // country.name.includes(inputSearch.value) à adapter en fonction de votre code.

        let myArray = Object.values(data); //convert object json to array
        let arrResult = myArray.filter(d => d.translations.fra.common.includes(inputSearch.value));
        
        // Tri : make here my sort method

        if(sortMethod==="croissant"){
            arrResult.sort(function(a, b){return a.population-b.population});
        }else if(sortMethod==="decroissant"){
            arrResult.sort(function(a, b){return b.population-a.population});
        }else if(sortMethod==="alpha"){
            //filtrer par ordre alphabétique
            arrResult.sort(function(a,b){return a.translations.fra.common.localeCompare(b.translations.fra.common)});
        }


        // Create a variable to store HTML table
        let li="";
        let nbrDisplay = getRangeValue();
        


        // Loop through each data and add a table row
        // data.forEach((country) => {
        
        // 5. Gérer le nombre de pays afficher avec l'input range. Avant le map, 
        // vous pouvez utiliser le fonction slice(0, valeurSouhaitée)
        arrResult.slice(0,nbrDisplay).forEach((country) => {
            
            li += `<div class="countryDetail">
                <span><img src="${country.flags.svg}"></span>
                <span>${country.translations.fra.common} </span>
                <span>Cap : ${country.capital}</span>
                <span>Pop : ${country.population}</span>
            </div>`;
        });
        
        // DOM Display result
        document.getElementById("countries").innerHTML = li;
        
    });
}
  
// dès que l'input search change de valeur
inputSearch.addEventListener("input", ()=>{
    getRangeValue();
    fetchCountry();
});

// récupérer la valeur du range
inputRange.addEventListener("input",()=>{
    getRangeValue();
    fetchCountry();

});
// récupérer la range du potentiomètre
function getRangeValue(){
    rangeSpan.textContent = inputRange.value;
    return inputRange.value;
}

// 6. Terminer l'exercice en gérant le tri en fonction des trois 
// boutons restants. Je vous conseille de créer une variable sortMethod et 
// d'effectuer dans la méthode sort des if en fonction de sortMethod. 
// Par exemple, lorsque l'on clique sur le bouton tri croissant, 
// sortMethod = "croissant" et dans sort((p1, p2) => { if (sortMethod == "croissant") 
// return p1.population - p2.population ; else if ...

croissantTri.addEventListener("click",()=>{
    sortMethod="croissant";
    getRangeValue();
    fetchCountry();
});
decroissantTri.addEventListener("click",()=>{
    sortMethod="decroissant";
    getRangeValue();
    fetchCountry();
});
alphaTri.addEventListener("click",()=>{
    sortMethod="alpha";
    getRangeValue();
    fetchCountry();
});