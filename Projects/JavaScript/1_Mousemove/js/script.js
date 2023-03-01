
const mousemove3 = document.querySelector('.mousemove3');

window.addEventListener('mousemove',(e)=>{
    console.log(e);
    mousemove3.style.left = e.pageX + "px";
    mousemove3.style.top = e.pageY + "px";
});