/* SELECTORES */

// Botón Teachable Machine
let botonTeachable = document.getElementById("teachable-machine");
let botonTeachableExit = document.getElementById("back-page");

// Botón Redes neuronales significado
let botonRedesMeaning = document.getElementById("redes--meaning");
let botonRedesMeaningExit = document.getElementById("back-page--red-meaning");

// Botón redes neuronales uso
let botonRedesUse = document.getElementById("redes--use");
let botonRedesUseExit = document.getElementById("back-page--red-use");

// Botón redes neuronales aplicaciones
let botonRedesAplication = document.getElementById("redes--aplication");
let botonRedesAplicationExit = document.getElementById("back-page--red-aplication");

// Botón redes neuronales funciones
let botonRedesFunction = document.getElementById("redes--function");
let botonRedesFunctionExit = document.getElementById("back-page--red-function");

// Botón redes neuronales arquitectura
let botonRedesArquitecture = document.getElementById("redes--arquitecture");
let botonRedesArquitectureExit = document.getElementById("back-page--red-arquitecture");


/* EVENT LISTENERS */

botonTeachable.addEventListener("click", showPage, false);
botonTeachableExit.addEventListener("click", exitPage, false);

botonRedesMeaning.addEventListener("click", showPageR, false);
botonRedesMeaningExit.addEventListener("click", exitPageR, false);

botonRedesUse.addEventListener("click", showPageRU, false);
botonRedesUseExit.addEventListener("click", exitPageRU, false);

botonRedesAplication.addEventListener("click", showPageRA, false);
botonRedesAplicationExit.addEventListener("click", exitPageRA, false);

botonRedesFunction.addEventListener("click", showPageRF, false);
botonRedesFunctionExit.addEventListener("click", exitPageRF, false);

botonRedesArquitecture.addEventListener("click", showPageRAc, false);
botonRedesArquitectureExit.addEventListener("click", exitPageRAc, false);

/* FUNCIONES */

function showPage(){
    let infoTeachable = document.getElementById("teachable-machine--page");
    infoTeachable.classList.add("visibility");
}

function exitPage(){
    let infoTeachable = document.getElementById("teachable-machine--page");
    infoTeachable.classList.remove("visibility");
}

function showPageR(){
    let infoRedesMeaning = document.getElementById("red-neuronal--page");
    infoRedesMeaning.classList.add("visibility");
}

function exitPageR(){
    let infoRedesMeaning = document.getElementById("red-neuronal--page");
    infoRedesMeaning.classList.remove("visibility");
}

function showPageRU(){
    let infoRedesUse = document.getElementById("red-neuronal-use--page");
    infoRedesUse.classList.add("visibility");
}

function exitPageRU(){
    let infoRedesUse = document.getElementById("red-neuronal-use--page");
    infoRedesUse.classList.remove("visibility");
}

function showPageRA(){
    let infoRedesAplication = document.getElementById("red-neuronal-aplicaction--page");
    infoRedesAplication.classList.add("visibility");
}

function exitPageRA(){
    let infoRedesAplication = document.getElementById("red-neuronal-aplicaction--page");
    infoRedesAplication.classList.remove("visibility");
}

function showPageRF(){
    let infoRedesFunction = document.getElementById("red-neuronal-function--page");
    infoRedesFunction.classList.add("visibility");
}

function exitPageRF(){
    let infoRedesFunction = document.getElementById("red-neuronal-function--page");
    infoRedesFunction.classList.remove("visibility");
}

function showPageRAc(){
    let infoRedesArquitecture = document.getElementById("red-neuronal-arquitecture--page");
    infoRedesArquitecture.classList.add("visibility");
}

function exitPageRAc(){
    let infoRedesArquitecture = document.getElementById("red-neuronal-arquitecture--page");
    infoRedesArquitecture.classList.remove("visibility");
}
