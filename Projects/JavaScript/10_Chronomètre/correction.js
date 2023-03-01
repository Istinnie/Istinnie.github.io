let totalSeconds;
let idInterval;

const chrono= () => {
    if(totalSeconds < 0){
        clearInterval(idInterval);
        displayCompteur.innerHTML = "C'est terminé";
    }
    else {
        minute = Math.floor(totalSeconds / 60);
        seconde = totalSeconds % 60;
        seconde = seconde > 10 ? seconde : "0" + seconde
        totalSeconds --;
        displayCompteur.innerHTML = `${minute} : ${seconde}`;
    }
}

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    clearInterval(idInterval);
    if(isNaN(choice.value)){
        alert('Veuillez entrer un nombre');
    }
    else{
        totalSeconds = choice.value * 60;
        choice.value = "";
        idInterval = setInterval(chrono,100);
        
    }
})
