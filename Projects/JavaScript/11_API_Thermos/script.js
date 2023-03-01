// code pour récupérer les latitude et longitude
let lat,long;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
  
function success(pos) {
    var crd = pos.coords;
    lat = crd.latitude;
    long = crd.longitude;

    // console.log('Votre position actuelle est :');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude : ${crd.longitude}`);
    // console.log(`La précision est de ${crd.accuracy} mètres.`);


    displayLatitude.innerHTML =`Latitude : ${crd.latitude}`;
    displayLongitude.innerHTML =`Longitude : ${crd.longitude}`;
    fetchTemperature(lat,long);
}
  
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}
  


// faire une requête API
function fetchTemperature(la,lo){
    fetch("https://weather.contrateumdev.com.br/api/weather?lat="+la+"&lon="+lo)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        let sunrise = new Date(data.sys.sunrise *1000);
        let sunset = new Date(data.sys.sunset *1000);

        
        displaySun.innerHTML =`
            Levé de soleil à : ${sunrise.getHours()} h ${sunrise.getMinutes()}<br><br>
            Couché de soleil à : ${sunset.getHours()} h ${sunset.getMinutes()}<br>
            `;
        displayTemp.innerHTML = `
            Ville de : ${data.name} <br><br>
            Température : ${data.main.temp}° <br>`;
        
    });
}
  
// au clic du bouton  
button.addEventListener("click", ()=>{
    navigator.geolocation.getCurrentPosition(success, error, options);
});