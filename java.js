window.onload = init;
function init(){
    document.getElementById("iniciar").addEventListener("click",cro);
    document.getElementById("parar").addEventListener("click",parar);
    document.getElementById("reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}  


function cro(){
    iniciar();
    id = setInterval(iniciar,1000);
    document.getElementById("iniciar").removeEventListener("click",cro);
}
function iniciar(){
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}
    document.getElementById("hms").innerHTML = h + ":" + m + ":" + s; 
}

function parar(){
    clearInterval(id);
    document.getElementById("iniciar").addEventListener("click",cro); 
}
function reiniciar(){
    clearInterval(id);
    h=0;
    s=0;
    m=0;
    document.getElementById("hms").innerHTML = h + ":" + m + ":" + s; 
}