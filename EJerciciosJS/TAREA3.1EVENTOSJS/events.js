function manejarPresionarTecla() {
    actualizarMensaje('salidaPresionarTecla', 'Tecla presionada.',true);
}

function manejarSoltarTecla() {
    actualizarMensaje('salidaSoltarTecla', 'Tecla soltada.',true);
}

function manejarEnfoque(elemento) {
    if (elemento) {
        elemento.style.backgroundColor = 'lightblue';
        actualizarMensaje('salidaEnfoque', 'Elemento en foco.',true);
    }
}

function manejarDesenfoque(elemento) {
    if (elemento) {
        elemento.style.backgroundColor = '';
        actualizarMensaje('salidaDesenfoque', 'Elemento fuera de foco.');
    }
}

function manejarSeleccionar() {
    actualizarMensaje('salidaSeleccionar', 'Texto seleccionado.', true);
}

function actualizarMensaje(id, mensaje, limpiar = false) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = mensaje;
        if (limpiar) {
            // Ajusta el tiempo de limpieza si es necesario
            setTimeout(() => {
                elemento.textContent = '';
            }, 3000); // Limpia el mensaje después de 3 segundos
        }
    }
}
