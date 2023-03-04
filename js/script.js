// Créer un événement au click sur le hamburger menu pour sortir la sidebar, 

let mySideBar = document.getElementById("side-bar");
let nClick = 0;

document.querySelector(".toggle-btn").addEventListener("click",()=>{
    
    if(nClick === 0 ){
        mySideBar.style.left = "0px";
        nClick ++;
        hideHamburger();

    }else{
        // ranger la sidebar si on reclique dessus
        mySideBar.style.left = "-230px";
        nClick =0;
        showHamburger();
    }
    
});

// Ranger la sidebar si on clique sur le contenu principal
document.querySelector(".content").addEventListener("click",()=>{
    
    mySideBar.style.left = "-230px";
    nClick =0;
    showHamburger();
            
});

function hideHamburger(){
    document.querySelector(".toggle-btn span:nth-child(1)").style.transform = "rotate(45deg) translateY(10px) translateX(10px)";
    document.querySelector(".toggle-btn span:nth-child(2)").style.display = "none";
    document.querySelector(".toggle-btn span:nth-child(3)").style.transform = "rotate(-45deg)";
            
}
function showHamburger(){
    document.querySelector(".toggle-btn span:nth-child(1)").style.transform = "none";
    document.querySelector(".toggle-btn span:nth-child(2)").style.display = "block";
    document.querySelector(".toggle-btn span:nth-child(3)").style.transform = "none";
}




// hide   and show div
function displayProjects(n) {
    
    var projectsList;
    
    if(n===1){
        projectsList = projet1;
    }
    else if(n===2){
        projectsList = projet2;
    }
    if (projectsList.style.display === "none") {
        projectsList.style.display = "block";
        document.querySelector(".svpPlus_show_"+n).style.display = "none";
        document.querySelector(".svpPlus_hide_"+n).style.display = "block";
    } else {
        projectsList.style.display = "none";
        document.querySelector(".svpPlus_show_"+n).style.display = "block";
        document.querySelector(".svpPlus_hide_"+n).style.display = "none";
    }
  }