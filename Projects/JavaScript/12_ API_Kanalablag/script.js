// code pour récupérer les latitude et longitude
let lat,long;


  

 


// faire une requête API
function fetchJoke(){
    fetch("https://api.blablagues.net/?cat=animaux&rub=blagues")
    .then((response) => {
        return response.json();
    })
    .then((joke) => {
        console.log(joke);
        let head = joke.data.content.text_head;
        let text = joke.data.content.text;
        let hidden =joke.data.content.text_hidden;
        if(!head){
            head="";
        }
        if(!text){
            text="";
        }
        if(!hidden){
            hidden="";
        }
        displayJoke.innerHTML =`${head}<br>${text}  ${hidden}`;
        
    });
}
  
// au clic du bouton  
document.querySelector("body").addEventListener("click", ()=>{
    fetchJoke();
});