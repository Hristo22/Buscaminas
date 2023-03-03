let tamano;
let miTabla;
let filas;
let columnas;
let casilla;
let dificultad;
let numBombas;
let newDiv;
let contenido;

function generarTableroJS() {
    //tamano=document.getElementById("tamañoTablero").value;
    //miTabla=document.createElement("table");
    
    dificultad=document.getElementById("dificultad").value;

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

    actualizarNumMinasRestantes();
};

function dibujarTableroHTML(tamano) {
    contenido=document.getElementById("miDiv");

    //actualizamos las variables CSS con las variables JavaScript
    document.querySelector("html").style.setProperty("--num-filas",tamano);
    document.querySelector("html").style.setProperty("--num-columnas",tamano);

    while(contenido.firstChild) {
        //contenido.firstChild.removeEventListener("contextmenu",marcar);
        //contenido.firstChild.removeEventListener("click",destapar);
        contenido.removeChild(contenido.firstChild);
    }

    for(let f=0; f<tamano; f++) {
        for(let c=0; c<tamano; c++) {
            newDiv = document.createElement("div");
            newDiv.setAttribute("id","f" + f + "_c" + c );
            newDiv.setAttribute("onclick","clickar(id)");
            newDiv.setAttribute("class"," ");
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            //newDiv.addEventListener("contextmenu",marcar); //evento con el botón derecho del raton
            //newDiv.addEventListener("click",destapar); //evento con el botón izquierdo del raton

            contenido.appendChild(newDiv);
            
        }
    }
}

function numeroAleatorio() {
    let num=Math.floor(Math.random() * tamano);
    return num;
};

function colocarBombasTableroJS(numBombas) {
    //numBombas=document.getElementById("numBombas").value;

    for(let a=0; a<numBombas; a++) {
        let i=numeroAleatorio();
        let j=numeroAleatorio();

        if(document.getElementById(`f${i}_c${j}`).className==" ") {
            document.getElementById(`f${i}_c${j}`).innerHTML="";
            document.getElementById(`f${i}_c${j}`).classList="icon-bomba";
        }
    };
};

function clickar(id) {
    if(id.classList=="icon-bomba") {
        console.log("Has tocado una bomba 💣");
    } else {
        alert(id);
    }
};

/*
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
*/

function actualizarNumMinasRestantes(){
    document.querySelector("#numMinasRestantes").innerHTML = numBombas;
}