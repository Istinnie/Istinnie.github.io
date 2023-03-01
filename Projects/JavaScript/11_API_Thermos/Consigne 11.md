Réaliser une application web permettant d'obtenir la température actuelle par rapport à sa position.

Pour cela, il faut un bouton sur lequel on appuierai et qui va récupérer via le navigateur la position actuelle (latitude et longitude) de l'utilisateur. Il faut envoyer cette position à l'api suivante pour récupérer la température dans le JSON (Objet javascript) et la faire apparaître sur le body.

N.B : 

Pour récupérer la position actuelle de l'utilisateur via le navigateur : 
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition#examples

Pour effectuer une requête API et récupérer la réponse au format JSON :
Méthode 1 : (Ancienne)
function reqListener() {
  let dito = JSON.parse(this.responseText);
  console.log(dito.weight);
}
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "https://pokeapi.co/api/v2/pokemon/ditto&quot;, true);
oReq.send();
Méthode 2 : 

async function loadNames() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto&quot;);
  const names = await response.json();
  console.log(names);
}
loadNames();
Méthode 2.Bis : 

fetch("https://pokeapi.co/api/v2/pokemon/ditto&quot;)
  .then((response) => {
    return response.json();
  })
  .then((names) => {
    console.log(names);
  });


Lien vers l'API:
https://weather.contrateumdev.com.br/api/weather?lat=ValeurLATITUDE&lon=VALEURLongitude
