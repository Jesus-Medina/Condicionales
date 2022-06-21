let verificar = document.querySelector("#button");
let paginaUno = document.querySelector("#desafioUnoButton");
let paginaTres = document.querySelector("#desafioDosButton");
let parrafo = document.querySelector("#parrafo");
let parrafoHTML = document.createElement("p");
let nuevoBotton = document.createElement("botton");
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');
let suma;
let total;


function funcionCalcular() {
    number1 = parseInt(document.querySelector('#number1').value); 
    number2 = parseInt(document.querySelector('#number2').value);
    number3 = parseInt(document.querySelector('#number3').value);
    suma;
    total;

    if(isNaN(number1) || number1 < 0){
        number1 = 0;
    }
    if(isNaN(number2) || number2 < 0){
        number2 = 0;
    }
    if(isNaN(number3) || number3 < 0){
        number3 = 0;
    }
    suma = number1 + number2 + number3;
    total = document.querySelector("#total").innerHTML = suma;
}

function validarCantidad(){
    if(total > 10){
        insertarParrafo();
    }else {
        eliminarParrafo();
    }
}

function insertarParrafo(){
    parrafoHTML.innerText = "Lo siento solo puedes llevar 10 plantas maximo :(";
    parrafo.appendChild(parrafoHTML);
}

function eliminarParrafo(){
    parrafo.removeChild(parrafoHTML);
}

function compraRealizadaParrafo() {
    parrafoHTML.innerText = "Añadido con exito! :D";
    parrafo.appendChild(parrafoHTML);
}

function advertenciaParrafo() {
    parrafoHTML.innerText = "Debes agregar almenos 1 unidad! >:(";
    parrafo.appendChild(parrafoHTML);
}

function pasarAlCarro() {
    nuevoBotton.innerText = "Pasar al carro";
    nuevoBotton.classList.add("pasar__al__carro");
    verificar.after(nuevoBotton);
}

number1.addEventListener("input", () => {
    funcionCalcular();
    validarCantidad();
});

number2.addEventListener("input", () => {
    funcionCalcular();
    validarCantidad();
});

number3.addEventListener("input", () => {
    funcionCalcular();
    validarCantidad();
});

// recordatorio ver si funciona la actualizacion del total con el touch del celu

verificar.addEventListener("click", () => {
    funcionCalcular();
    if(total > 0){
        if(total > 10){
            insertarParrafo();
        }else {
            compraRealizadaParrafo();
            pasarAlCarro();
        }
    }
    else {
        advertenciaParrafo();
    }
});

verificar.addEventListener("touchstart", () => {
    funcionCalcular();
    if(total > 0){
        if(total > 10){
            insertarParrafo();
        }else {
            compraRealizadaParrafo();
        }
    }
    else {
        advertenciaParrafo();
    }
});

paginaUno.addEventListener("click", () => {
    window.location.assign("first.html");
});

paginaUno.addEventListener("touchstart", () => {
    window.location.assign("first.html");
});

paginaTres.addEventListener("click", () => {
    window.location.assign("third.html");
});

paginaTres.addEventListener("touchstart", () => {
    window.location.assign("third.html");
});

nuevoBotton.addEventListener("click", () => {
    window.location.assign("third.html");
});

nuevoBotton.addEventListener("touchstart", () => {
    window.location.assign("third.html");
});


