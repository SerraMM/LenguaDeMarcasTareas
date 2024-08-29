
//PRIMERO CREAMOS LA ARRAY y Las variables
let usuarios = [];
let nombre,email,telefono,website,asunto,mensaje;
// Función para manejar el envío del formulario
let formularioSubmit = (event)=>{
    event.preventDefault();
    // Captura los valores de los campos
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    website = document.getElementById("web").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    // Crea un objeto con los valores y lo añade al array
    let usuario = {
        nombre,
        email,
        telefono,
        website,
        asunto,
        mensaje
    };
    //añade el objeto al array usuarios
    usuarios.push(usuario);

    console.log(usuarios);

    document.getElementById("formContacto").reset();
}

document.getElementById("formContacto").addEventListener("submit",formularioSubmit);