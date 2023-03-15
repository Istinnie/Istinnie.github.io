
// ANIMATED TEXT IN INDEX OR HOMEPAGE
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


// NAVIGATION BAR
// Créer un événement au click sur le hamburger menu pour sortir la sidebar, 

let mySideBar = document.getElementById("side-bar");
let nClick = 0;

btn.addEventListener("click",()=>{
  // console.log(nClick)
    if(nClick === 0 ){
        mySideBar.style.left = "0px";
        nClick ++;
        hideHamburger();

    }else{
        // ranger la sidebar si on reclique dessus
        mySideBar.style.left = "-260px";
        nClick =0;
        showHamburger();
    }
    
});




// Ranger la sidebar si on clique sur le contenu principal
document.querySelector(".content").addEventListener("click",()=>{
    
    mySideBar.style.left = "-260px";
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