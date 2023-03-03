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
        contenido.firstChild.removeEventListener("contextmenu",marcar);
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
            newDiv.addEventListener("contextmenu",marcar); //evento con el botón derecho del raton

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

function marcar(miEvento){
    if (miEvento.type === "contextmenu"){
        console.log(miEvento);

        //obtenemos el elemento que ha disparado el evento
        let casilla = miEvento.currentTarget;

        //detenemos el burbujeo del evento y su accion por defecto
        miEvento.stopPropagation();
        miEvento.preventDefault();

        //obtenemos la fila de las propiedades dataset.
        //como es un string hay que convertirlo a numero
        let fila = parseInt(casilla.dataset.fila,10);
        let columna = parseInt(casilla.dataset.columna,10);

        if (fila>=0 && columna>=0 && fila< tamano && columna < tamano) {
            //si esta marcada como "bandera"
            if (casilla.classList.contains("icon-bandera")){
                //la quitamos
                casilla.classList.remove("icon-bandera");
                //y la marcamos como duda
                casilla.classList.add("icon-duda");
                //y al numero de minas encontradas le restamos 1
                numBombas++;
            } else if (casilla.classList.contains("icon-duda")){
                //si estaba marcada como duda lo quitamos
                casilla.classList.remove("icon-duda");
            } else if (casilla.classList.length == 0){
                //si no está marcada la marcamos como "bandera"
                casilla.classList.add("icon-bandera");
                //y sumamos 1 al numero de minas encontradas
                numBombas--;
                /*
                //si es igual al numero de minas totales resolvemos el tablero para ver si esta bien
                if (numMinasEncontradas == numMinasTotales){
                    resolverTablero(true);
                }
                */
            }

            actualizarNumMinasRestantes();
        }

    }
}

function actualizarNumMinasRestantes(){
    document.querySelector("#numMinasRestantes").innerHTML = numBombas;
}