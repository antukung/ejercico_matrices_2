const divTablero = document.querySelector("#tablero");

function boton() {
 

    divTablero.innerHTML = ``;
    for (let fila = 0; fila < 8; fila++) {
        divTablero.innerHTML += `
        <div class="row">
            ${agregarColumna(8, fila)}
        </div>`;
    }
}

function agregarColumna(numColumnas, fila) {
    let columnas = "";

    for (let columna = 0; columna < 8; columna++) {
        let classColumna;
        
        if ((fila + columna) % 2 === 0) {
            classColumna = `negro`;
        } else {
            classColumna = `blanco`;
        }

        columnas += `<div class="col casilla ${classColumna}">
        </div>`;
    }
    return columnas;
}
