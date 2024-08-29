// Array para almacenar los usuarios

let usuarios = [];
let nombre,email,telefono,website,asunto,mensaje
// Función para manejar el envío del formulario
let formularioSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Captura los valores de los campos
    nombre = document.querySelector("#nombre").value;
    email = document.querySelector("#email").value;
    telefono = document.querySelector("#telefono").value;
    website = document.querySelector("#web").value;
    asunto = document.querySelector("#asunto").value;
    mensaje = document.querySelector("#enviar").value;

    // Crea un objeto con los valores y lo añade al array
    let usuario = {
        nombre,
        email,
        telefono,
        website,
        asunto,
        mensaje
    };
    usuarios.push(usuario);

    // Muestra el array en la consola
    console.log(usuarios);

    document.querySelector("#formContacto").reset();
};

document.querySelector("#formContacto").addEventListener("submit", formularioSubmit);