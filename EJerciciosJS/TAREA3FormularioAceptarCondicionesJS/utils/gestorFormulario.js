document.getElementById('registroFormulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Previene la acción predeterminada de enviar el formulario

    let nombre = document.getElementById('inputNombre').value;
    let correo = document.getElementById('inputEmail').value;
    let comentarios = document.getElementById('inputComentarios').value;
    let condicionesAceptadas = document.getElementById('gridCheck1').checked;

    let mensajeDeError = '';

    if (!nombre) mensajeDeError += 'El nombre es obligatorio.\n';
    if (!correo.includes('@')) mensajeDeError += 'El correo debe contener "@".\n';
    if (comentarios.length > 50) mensajeDeError += 'Los comentarios no deben exceder 50 caracteres.\n';
    if (!condicionesAceptadas) mensajeDeError += 'Debe aceptar las condiciones del servicio.\n';

    if (mensajeDeError) {
        alert(mensajeDeError);
    } else {
        console.log('El formulario es válido. Procede con la lógica de envío al servidor.');
    }
});
