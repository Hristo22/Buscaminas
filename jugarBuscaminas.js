function calcularNumMinas(x, y){
    
}

function banderas(id){ //esta función se usa cuando el usuario pulsa el botón derecho en alguna celda de la tabla para poner o quitar banderas
    if(document.getElementById(id).outerText=="🚩"){ //compruebo si hay una bandera en la celda con el id dado y si es así la borro, añado una bomba y actualizo el contador de banderas
        document.getElementById(id).innerText="";
        bombas++;
        document.getElementById("banderas").innerText="Banderas restantes: "+bombas;
    }else if(bombas>0){ //compruebo si hay almenos una bandera por usar y si es así pongo una bandera en la celda, quito una bomba y actualizo el contador de banderas
        document.getElementById(id).innerText="🚩";
        bombas--;
        document.getElementById("banderas").innerText="Banderas restantes: "+bombas;
    }
}