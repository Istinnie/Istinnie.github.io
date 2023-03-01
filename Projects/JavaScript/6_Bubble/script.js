
// function randomCouleur() { 
//     let red = Math.round(Math.random()*255);
//     let green = Math.round(Math.random()*255);
//     let blue = Math.round(Math.random()*255);
//     let newRgbColor = "rgb("+red+","+green+","+blue+")";

//     document.querySelector("body").style.background = newRgbColor;
//     mySpan.innerHTML = newRgbColor;

// }



let newSpan;

let compteur = 0;
//  fonction de génération aléatoire des spans
function generate(){
    
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let newRgbColor = "rgb("+red+","+green+","+blue+")";

    let redGradient = Math.round(Math.random()*255);
    let greenGradient = Math.round(Math.random()*255);
    let blueGradient = Math.round(Math.random()*255);
    let newRgbGradientColorPartOne = "rgba("+red+","+green+","+blue+")";

    let newRgbGradientColorPartTwo = "rgba("+redGradient+","+greenGradient+","+blueGradient+")";
    
    let positionStartLeft = Math.round(Math.random()*100);
    let positionEndtLeft = Math.round(Math.random()*100);

    let size = Math.floor(Math.random()*300)+50;
    var newSpan = document.createElement('span');
    newSpan.setAttribute('class','monSpan');
    
    document.body.append(newSpan);
    newSpan.style.width = size+'px';
    newSpan.style.height = size+'px';
    newSpan.style.borderRadius = size+'px';
    newSpan.style.background = newRgbColor;
    newSpan.style.background = "linear-gradient(90deg, "+newRgbGradientColorPartOne+" 0%, "+newRgbGradientColorPartTwo+" 100%)";
    newSpan.style.setProperty('--my-start-left', ''+positionStartLeft+'vw');
    newSpan.style.setProperty('--my-end-left', ''+positionEndtLeft+'vw');


    newSpan.addEventListener("click",()=>{
        newSpan.remove();
        compteur++;
        document.getElementById("compteur").innerHTML = "Score : "+compteur;
    });
    setTimeout(()=>{newSpan.remove();},8000);
    // si tip = 0px on ajoute une nouvelle bulle
}

var generateNewSpan = setInterval(generate,900);
