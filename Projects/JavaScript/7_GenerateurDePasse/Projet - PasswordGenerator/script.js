
var listeMinuscule = "azertyuiopqsdfghjklmwxcvbn";
//listeMajuscule
var listeMajuscule = listeMinuscule.toUpperCase();
//listeNombre "0123456789"
var listeNombre = "0123456789";
//listeSymbols ,;:!ù$@
var listeSymbols =",;:!ù$@";


let data = [];
let password = "";
const generatepwd2 = ()=>{
    data = [];
    password = "";
    if (lowercase.checked){
        data.push(...listeMinuscule);
    }
    if (uppercase.checked){
        data.push(...listeMajuscule);
    }
    if (number.checked){
        data.push(...listeNombre);
    }
    if (special.checked){
        data.push(...listeSymbols);
    }
    for (let index = 0; index < pwdrangevalue.value; index++) {
        const i = Math.floor(Math.random()*data.length);
        password += data[i];
    }
    pwdgenerated.value = password;
}


//Afficher dans le h2 le mot de passe généré

// Toute cette fonction doit être éxécutée au moment où on appuie sur générer le mot de passe
document.querySelector("button").addEventListener("click", generatepwd2);


//  presse papier
// On copie le texte dans le presse-papier
// pwdgenerated.addEventListener("click",()=>{
//     navigator.clipboard.writeText(pwdgenerated.innerHTML).then(() => {
//         alert("Mot de passe "+pwdgenerated.innerHTML+" copiée dans le presse papier");
//     });

// });

// let pwd = [];
// let resultPwd = [];
//DATA : tableau qui contient toutes les caractères activés
// Pour ajouter des données dans un tableau il faut faire data.push(donneaajoute)

//password est une chaine de caractères vides au départ : password = ""

//pour verifier qu'une checkbox est cochée: iddelacheckbox.checked
// exemple pour minuscule : if(minuscule.checked){ajouter toutes les minuscules dans data}
// let lowerCase = document.getElementById("lowercase");
// let upperCase = document.getElementById("uppercase");
// let numberCheck = document.getElementById("number");
// let specialCheck = document.getElementById("special");

// let lowerLength = listeMinuscule.length;
// let upperLength = listeMajuscule.length;
// let nbrLength = listeNombre.length;
// let symbolLength = listeSymbols.length;

// let resultLength = 0;

// lowerCase.addEventListener('click', event => {
// 	if(event.target.checked) {
// 		pwd.push(...listeMinuscule);
//         resultLength += lowerLength;
        
// 	}
// });
// upperCase.addEventListener('click', event => {
// 	if(event.target.checked) {
// 		pwd.push(...listeMajuscule);
//         resultLength = resultLength + upperLength;
// 	}
// });
// numberCheck.addEventListener('click', event => {
// 	if(event.target.checked) {
// 		pwd.push(...listeNombre);
//         resultLength = resultLength + nbrLength;
// 	}
// });
// specialCheck.addEventListener('click', event => {
// 	if(event.target.checked) {
// 		pwd.push(...listeSymbols);
//         resultLength = resultLength + symbolLength;
// 	}
// });
// function generatePwd(){
//     //Verifier que data n'est pas vide : si c'est le cas mettre une alerte
//     console.log(pwd);
//     console.log(resultLength +" length de mon résultat");
//     resultPwd=[];
//     if(pwd.length === 0){
//         // Boucle qui va à être répéter le nombre de fois choisi par l'utilisateur dans le range (tailleMdp)
//         // j'ajoute dans password un caractère au hasard de DATA
//         alert("Spécifiez le contenu de votre mot de passe");
//     }else{
//         pwd.length = pwdrangevalue.value;
//         console.log("longueur de tableau "+pwd.length);
//         for (let i = 0; i < pwd.length; i++) {

//             let index = Math.floor(Math.random()*resultLength);
//             console.log(index+ " mon index");
//             console.log(pwd[index]+"à select");

//             resultPwd.push(pwd[index]);

//             console.log(resultPwd);

//         }
//         // document.querySelector("pwdgenerated").setAttribute('value',"resultPwd");
//         document.querySelector("h2").innerHTML =resultPwd.join('');
        
//     }
    
// }