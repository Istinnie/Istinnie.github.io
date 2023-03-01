let myPokemon = [];
let myPokemonNameAleatoire;
let index;
let citation = ["Une organisation, cela combine toutes sortes d'énergies pour créer une force irrésistible... Je n'ai pas été capable de libérer toute l'énergie de mes hommes...",
"Dans les combats de Pokémon... Il ne s'agit pas seulement de décider un gagnant, il y a ton équipe! Toi ! Ton adversaire ! Et son équipe ! Une équation subtile à 4 inconnues",
"Le monde ne devrait pas être meilleur... il se doit de devenir meilleur. Et pour la réalisation de cette grande cause, les élus, humains et Pokémon, doivent travailler ensemble, sans relâche. Si j'en avais le pouvoir, je désintégrerais ce monde en un instant pour que la beauté soit inaltérée... éternelle !",
"Un Pokémon puissant. Un Pokémon faible. Ce sont des catégories artificielles. Un Dresseur véritablement puissant est capable de vaincre avec le Pokémon qu'il aime. Je t'aime bien. Je sais que tu comprends cela.",
"À l'état naturel, les Pokémon sont des créatures sauvages. Ils sont libres. Parfois, ils nous font obstacle. Parfois, ils nous aident. Combattre en s'alliant avec les Pokémon, tu sais ce que ça représente ? Tu sais ce qu'il faut pour y parvenir ? Si tu ne le sais pas, alors tu ne pourras jamais me dominer !",
"Je comprends maintenant que ce ne sont pas les circonstances de la naissance qui importe, mais c'est ce qu'on fait du don de la vie qui détermine qui l'on est.",
"Quoi qu'il en soit, regarde un peu ça... Il a suffit d'une petite éruption volcanique pour détruire une ville toute entière... On a beau gagner et perdre des combats de Pokémon, la nature n'a qu'à trembler et il ne reste plus rien de nous..."];


// requete pour récupérer les datas de pokemon
// source : https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
.then(response => response.json())
.then(function(allpokemon){
    console.log(allpokemon);
    allpokemon.results.forEach(function(pokemon){
        let url = pokemon.url // <--- this is saving the pokemon url to a      
        // variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
        let pokemonName ;
        fetch(url)
        .then(response2 => response2.json())
        .then(function(pokeData){
            pokemonName = pokeData.name;
            myPokemon.push(pokemonName);
        })
    })
});

// la fonction qui va générer aléatoirement le nom des Pokemons
function generateMyPokemon(){
    if(myPokemon.length > 0){
        console.log("ma table "+myPokemon);
        index = Math.floor(Math.random()*myPokemon.length);
        document.querySelector("h2").innerHTML = myPokemon[index];
        document.querySelector("h3").innerHTML = citation[Math.floor(Math.random()*citation.length)]
        createPokemonImage(index);
    }
    
}

// la fonction qui va chercher l'image du pokemon
function createPokemonImage(pokemonID){
    let monImg = document.querySelector(".imagePokemon");
    monImg.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID+1}.png`;

}

// l'évènement au click sur le bouton
generateCitation.addEventListener("click",()=>{
    generateMyPokemon();
})

// génère le nom de pokemon chaque 5 secondes
setInterval(()=>{
    generateMyPokemon();
},5000);

