let listaNombresGastos = [];
let listaValoresGastos = [];

function agregarGasto() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let valorGasto = 0;
    listaNombresGastos.forEach((element, position) => {
       const listaValoresGastos = Number(listaValoresGastos[position]).toFixed(2);
       htmlLista += `<li>${element} - USD ${valorGasto}
                    <button onclick="eliminarGasto(${position});">Eliminar</button>
                    </li>`;
       totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(position) {
    listaNombresGastos.splice(position,1);
    listaValoresGastos.splice(position,1);
    actualizarListaGastos();
}