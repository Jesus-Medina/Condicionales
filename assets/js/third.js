let paginaUno = document.querySelector("#desafioUnoButton");
let paginaTres = document.querySelector("#desafioDosButton");
let verificacion = document.querySelector("#verificacion");
let mensaje = document.querySelector("#mensaje");

function verificar(){
    let opcion1 = document.querySelector("#selec1").value;
    let opcion2 = document.querySelector("#selec2").value;
    let opcion3 = document.querySelector("#selec3").value;
    let claveSecreta = opcion1 + opcion2 + opcion3;

    if (claveSecreta == 911) {
        mensaje.innerHTML = "¡Codigo Promocional ingresado con Exito! 20% de descuento :D"
    }else {
        mensaje.innerHTML = "Codigo Promocional incorrecto! Prueba con otro nuevamente :("
    }
}

verificacion.addEventListener("click", () => {
    verificar();
});


paginaUno.addEventListener("click", () => {
    window.location.assign("index.html");
});

paginaUno.addEventListener("touchstart", () => {
    window.location.assign("index.html");
});

paginaTres.addEventListener("click", () => {
    window.location.assign("second.html");
});

paginaTres.addEventListener("touchstart", () => {
    window.location.assign("second.html");
});
