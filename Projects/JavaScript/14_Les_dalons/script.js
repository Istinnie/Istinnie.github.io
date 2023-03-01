// code pour récupérer les latitude et longitude

let sortMethod ="alpha";
let users = [] ;

fetchCountry();

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}


// faire une requête API
function fetchCountry(){
    fetch("https://randomuser.me/api/?results=20")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        
        // convertir l'object en tableau
        users = Object.values(data); 
        console.log(users[0]);

    
        
        let li="";
        let gender="";
        let dateInscription;
        let dateActuelle;
        let nbrJours;
        
        // pour effectuer un filtre par exemple, femme agée de moins de 50 ans
        // users[0].filter((u) => u.gender === 'female' && u.dob.age < 50).forEach((user) => {
        users[0].sort((a, b) => {
            // filtrer par date d'ancienneté
            const today = new Date();
            const aRegistered = new Date(a.registered.date);
            const bRegistered = new Date(b.registered.date);
    
            const aDiff = today - aRegistered;
            const bDiff = today - bRegistered;
    
            return bDiff - aDiff;
    
        }).forEach((user) => {
        
            // genre du client
            if(user.gender==='male'){
                gender="homme";
            }else{
                gender="femme";
            }
            // différence de date
            dateActuelle = new Date();
            dateInscription = new Date(user.registered.date);
            nbrJours = dateDiff(dateInscription, dateActuelle);

            li += `<div class="countryDetail">
                <span ><img src="${gender}.png" class="gender"></span>
                <span><img src="${user.picture.medium}" class="photo"></span>
                <span>${user.name.last} ${user.name.first}</span>
                <span>${user.email}</span>
                <span>Inscript depuis ${nbrJours[3]} Jours</span>
            </div>`;
        });
        
        // DOM Display result
        document.getElementById("countries").innerHTML = li;
        
    });
}
  
function dateDiff(date1, date2){
    var diff = {};
    var diffArray =[];                          // Initialisation du retour
    var tmp = date2 - date1;
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
 
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
 
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;

    diffArray = Object.values(diff); // diffArray[3] est le nombre de jours
    
    return diffArray;
}