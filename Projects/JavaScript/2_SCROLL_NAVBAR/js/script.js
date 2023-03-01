
window.addEventListener("scroll", ()=>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "0px";
    }
    
});


