var x = setInterval(randomCouleur, 2000);
let mySpan = document.querySelector("span");
let play = true;

function randomCouleur() { 
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let newRgbColor = "rgb("+red+","+green+","+blue+")";

    document.querySelector("body").style.background = newRgbColor;
    mySpan.innerHTML = newRgbColor;

}
function stopRandomCouleur(){
    clearInterval(x);

}



// copier la couleur dans le presse papier

// On clique le span

// On copie le texte dans le presse-papier
mySpan.addEventListener("click",()=>{
    navigator.clipboard.writeText(mySpan.innerHTML).then(() => {
        
        alert("Couleur "+mySpan.innerHTML+" copiée dans le presse papier");
    });

});

//  change le background du span à chaque survol de la souris
mySpan.addEventListener("mouseover",()=>{
    mySpan.style.background = "white";
});
mySpan.addEventListener("mouseout",()=>{
    mySpan.style.background = "none";
});

//  Un clic stop ou joue le changement aléatoire de background
document.body.addEventListener("click",()=>{
    if (play){
        stopRandomCouleur();
    }else{
        x = setInterval(randomCouleur, 2000);
    }
    play = !play;
});
