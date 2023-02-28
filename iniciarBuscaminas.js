let tamano;
let miTabla;
let filas;
let columnas;
let casilla;
let bomba="💣";
let dificultad;
let numBombas;

function generarTableroJS() {
    //tamano=document.getElementById("tamañoTablero").value;
    miTabla=document.createElement("table");
    dificultad=document.getElementById("dificultad").value;

    if(dificultad=="Facil") {
        setTimeout(function() {
            tamano=3;
            numBombas=2;
            dibujarTableroHTML(tamano);
        },1000);
    }

    if(dificultad=="Normal") {
        setTimeout(function() {
            tamano=8;
            numBombas=6;
            dibujarTableroHTML(tamano);
        },1000);
    }

    if(dificultad=="Dificil") {
        setTimeout(function() {
            tamano=15;
            numBombas=12;
            dibujarTableroHTML(tamano);
        },1000);
    }

    if(dificultad=="miEleccion") {
        setTimeout(function() {
            tamano=document.getElementById("tamañoTablero").value;
            numBombas=document.getElementById("numBombas").value;
            dibujarTableroHTML(tamano);
        },1000);
    }

    let contenido=document.getElementById("miDiv");
    contenido.appendChild(miTabla);

    colocarBombasTableroJS(numBombas);
};

function dibujarTableroHTML(tamano) {
    for(let i=0; i<tamano; i++) {
        filas=document.createElement("tr");
        for(let j=0; j<tamano; j++) {
            crearCasillero(filas,i,j);
        }
        miTabla.appendChild(filas);
    }
}

function crearCasillero(filas, i, j) {
    casilla=document.createElement("td");
    casilla.setAttribute("id",`idCelda_${i}_${j}`);
    casilla.setAttribute("class","colorCeldas");
    //casilla.setAttribute("id",10*i+j);
    casilla.setAttribute("onclick", "clickar(id)");
    casilla.setAttribute("value", " ");
    filas.appendChild(casilla);
};

function numeroAleatorio() {
    let num=Math.floor(Math.random() * tamano);
    return num;
};

function colocarBombasTableroJS(numBombas) {
    let i=numeroAleatorio();
    let j=numeroAleatorio();
    //numBombas=document.getElementById("numBombas").value;

    for(let a=0; a<numBombas; a++) {
        if(document.getElementById(`idCelda_${i}_${j}`).value==" ") {
            document.getElementById(`idCelda_${i}_${j}`).value=bomba;
        }
    };
};

function clickar(id) {
    if(id.value==bomba) {
        alert("Has tocado una bomba 💣");
    } else {
        alert(id);
    }
};