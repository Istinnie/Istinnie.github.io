
let entry;
let nbreDeSecondes;

button.addEventListener("click",function(event){
    event.preventDefault();
    
    entry = minuteEnter.value;

    if(entry <= 0){
        alert("Entrez un nombre de minutes valide");
        myMinute.innerHTML = "00";
        mySeconde.innerHTML = "00";
    }else{
        nbreDeSecondes = entry*60;
    }

});

// change la valeur de minutes affiché en titre
minuteEnter.addEventListener("change",()=>{
    if(minuteEnter.value<=0){
        minuteEnter.value = 0;
    }
});


let count = setInterval(()=>{
    if(nbreDeSecondes >= 0){
        myMinute.innerHTML = Math.floor(nbreDeSecondes/60);
        mySeconde.innerHTML = nbreDeSecondes % 60;
        nbreDeSecondes --;
    }
    if(nbreDeSecondes<0){
        myMinute.innerHTML = "0";
        mySeconde.innerHTML = "0";
        clearInterval(count);
        alert("C'est fini");
    }
},1000);

