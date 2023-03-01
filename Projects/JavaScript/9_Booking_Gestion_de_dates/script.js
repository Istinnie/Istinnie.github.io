let  priceTable = [47,68,54,39,52,80,65,73,75,59];
let priceUAleatoire = priceTable[Math.floor(Math.random()*priceTable.length)];

// let nbrNuit;


//  converti la date en format AAAA-MM-JJ

let today = new Date();
let tomorrow = new Date();


const DateToInputDateValue =(d)=>{
    return d.toISOString().split("T")[0];
}


//  afficher la date du jour dans la date de début et le lendemain dans la date de fin
tomorrow.setDate(tomorrow.getDate()+1);
dateDebut.value = DateToInputDateValue(today);
dateFin.value = DateToInputDateValue(tomorrow);
CalculateTotal();
priceU.innerHTML = priceUAleatoire;



// varier aussi la date de fin selon la date de début
dateDebut.addEventListener("change",()=>{
    
    let start = new Date(dateDebut.value);
    let end = new Date(dateFin.value);
    if(start > end){
        start.setDate(start.getDate()+1);
        dateFin.value = DateToInputDateValue(start);
    }
    CalculateTotal();
});
//  varier la date de début selon la date de fin choisie
dateFin.addEventListener("change",()=>{
    
    let start = new Date(dateDebut.value);
    let end = new Date(dateFin.value);
    if(start > end){
        end.setDate(end.getDate()-1);
        dateDebut.value = DateToInputDateValue(end);
    }
    CalculateTotal();
});

function CalculateTotal(){
    let date1 = new Date(dateDebut.value);
    let date2 = new Date(dateFin.value);
    var timeDiff = date2.getTime() - date1.getTime(); // différence des heures
    var daysDiff = timeDiff / (1000 * 3600 * 24); // différence de jours
    // afficher la différence
    priceT.innerHTML = priceUAleatoire*daysDiff;
}



// if(dateDebut.value !== null && dateFin.value !== null){
//     nbrNuit = dateFin.value - dateDebut.value;
//     priceU.innerHTML = priceUAleatoire+" €/nuit";
//     // priceT.innerHTML = priceUAleatoire*(nbrNuit);
// }


// dateDebut.onblur = verifieDateFin;

// function verifieDateFin() {
//   if(dateFin.value === null){
//     dateFin.setDate(dateDebut.getDate()+1);
//   }
// }


