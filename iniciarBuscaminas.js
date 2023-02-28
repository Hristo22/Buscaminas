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

    if(document.getElementById("boton").click==true) {
        location.reload();
    }

    if(dificultad=="Facil") {
        tamano=3;
        numBombas=2;
    }
    else if(dificultad=="Normal") {
        tamano=8;
        numBombas=6;
    }
    else if(dificultad=="Dificil") {
        tamano=15;
        numBombas=12;
    }
    else {
        tamano=document.getElementById("tamañoTablero").value;
        numBombas=document.getElementById("numBombas").value;
    }

    dibujarTableroHTML(tamano);

    colocarBombasTableroJS(numBombas);

    let contenido=document.getElementById("miDiv");
    contenido.appendChild(miTabla);
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
    casilla.setAttribute("onclick","clickar(id)");
    casilla.setAttribute("value"," ");
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
        if(document.getElementById(`idCelda_${i}_${j}`)==" ") {
            document.getElementById(`idCelda_${i}_${j}`).value=bomba;
        }
    };
};

function clickar(id) {
    if(document.getElementById(id).value==bomba) {
        alert("Has tocado una bomba 💣");
    } else {
        alert(id);
    }
};

function banderas(id){ 
    if(document.getElementById(id).outerText=="🚩"){
        document.getElementById(id).innerText="";
        numBombas++;
        document.getElementById("numBanderas").innerText="Banderas restantes: "+numBombas;
    }else if(numBombas>0){
        document.getElementById(id).innerText="🚩";
        numBombas--;
        document.getElementById("numBanderas").innerText="Banderas restantes: "+numBombas;
    }
}