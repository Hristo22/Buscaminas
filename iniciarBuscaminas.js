window.addEventListener("load",generarTableroJS);

let tamano;
let miTabla;
let filas;
let columnas;
let casilla;

function generarTableroJS() {
    tamano=prompt("Dime el tamaño del tablero");
    miTabla=document.createElement("table");

    //function dibujarTableroHTML() {
        for(let i=0; i<tamano; i++) {
            filas=document.createElement("tr");
            for(let j=0; j<tamano; j++) {
                crearCasillero(filas,i,j);
            }
            miTabla.appendChild(filas);
        }
    //}

    let contenido=document.getElementById("miDiv");
    contenido.appendChild(miTabla);
};

function crearCasillero(filas, i, j) {
    casilla=document.createElement("td");
    casilla.setAttribute("id",`idCelda_${i}_${j}`);
    casilla.setAttribute("class","colorCeldas");
    casilla.setAttribute("id",10*i+j);
    casilla.setAttribute("onclick", "clickar(id)");
    filas.appendChild(casilla);
};

function numeroAleatorio() {
    let num=getRandomInt(3);
    return num;
};

function colocarBombasTableroJS() {
    let i=getRandomInt(tamano);
    let j=getRandomInt(tamano);

    for(let a=0; a<tamano/2; a++) {
        if(casilla[i][j]==null) {
            casilla[i][j].innerText="💣";
        }
    };
};

function clickar(id) {
    alert(id);
    id.show();
    if(document.getElementById(id)=="💣") {
        alert("Has tocado una bomba");
    }
};