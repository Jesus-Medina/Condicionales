let circulo = document.querySelector(".circulo");
let boton = document.querySelector(".boton");
let dialogo = document.querySelector(".dialogo");
let contador = 0;

circulo.addEventListener("touchstart", () => {
    ++contador;
    if(contador %2 != 0){
        circulo.classList.remove("circulo__hover");
        circulo.classList.add("transition");
        dialogo.innerHTML = " ";
        setTimeout(function() {
            window.location.assign("second.html");
        }, 1000 * 2);
    }
    else {
        alert("Lo siento no pudimos cargar la pagina :(")
    }
})

circulo.addEventListener("click", () => {
    ++contador;
    if(contador %2 != 0){
        circulo.classList.remove("circulo__hover");
        circulo.classList.add("transition");
        dialogo.innerHTML = " ";
        setTimeout(function() {
            window.location.assign("second.html");
        }, 1000 * 2);
    }
    else {
        alert("Lo siento no pudimos cargar la pagina :(");
    }
})

document.addEventListener("touchstart", e => {
    console.log("tocado")
})

