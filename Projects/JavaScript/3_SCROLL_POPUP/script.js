

// Créer un événement au scroll

window.addEventListener("scroll", ()=>{
    
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    // Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.height = "40px";
    } else {
        navbar.style.height = "90px";
    }
    console.log(scrollPercentRounded);
});

// Faire apparaitre l'image de la partie improvise

document.getElementById("improvise").addEventListener("mouseover", showImage);
function showImage() {
    document.getElementById("imgImprovise").style.opacity = "1";
}

// Faire apparaitre la popup quand on est en bas du site

let monPopup = document.querySelector(".pop-up");
window.addEventListener("scroll", ()=>{
    
    // source https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/
    
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight; // hauteur du body
    let winHeight = window.innerHeight; // 
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    
    if (scrollPercentRounded === 100) {
        monPopup.style.transform = "none";
        monPopup.style.opacity = "1";
    } 
    
    // console.log(scrollPercentRounded);
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

document.querySelector(".pop-up").addEventListener("click",()=>{
    document.querySelector(".pop-up").style.display = "none";
});