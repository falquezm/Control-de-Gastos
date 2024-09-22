let listaGastos = [];

function agregarGasto() {
    let fechaGasto = document.getElementById('fechaGasto').value;
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    listaGastos.push([fechaGasto,nombreGasto,descripcionGasto,Number(valorGasto).toFixed(2)]);
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaGastos.forEach((element, position) => {
        htmlLista += `<li>${element[0]} -  ${element[1]} -  ${element[2]} - USD $${element[3]}
                        <button onclick="modificarGasto(${position});">Modificar</button>
                        <button onclick="eliminarGasto(${position});">Eliminar</button>
                     </li>`;
        totalGastos += Number(element[3]);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('fechaGasto').value = '';
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('botonFormulario').textContent = "Agregar Datos";
    document.getElementById('botonFormulario').onclick = function() { agregarGasto(); };
}

function eliminarGasto(position) {
    listaGastos.splice(position,1);
    actualizarListaGastos();
}

function modificarGasto(position) {
    document.getElementById('fechaGasto').value = listaGastos[position][0];
    document.getElementById('nombreGasto').value = listaGastos[position][1];
    document.getElementById('descripcionGasto').value = listaGastos[position][2];
    document.getElementById('valorGasto').value = listaGastos[position][3];
    document.getElementById('botonFormulario').textContent = "Actualizar Datos";
    document.getElementById('botonFormulario').onclick = function() { actualizarGasto(position); };
}

function actualizarGasto(position) {
    let fechaGasto = document.getElementById('fechaGasto').value;
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    listaGastos[position] = [fechaGasto,nombreGasto,descripcionGasto,Number(valorGasto).toFixed(2)];
    actualizarListaGastos();
}