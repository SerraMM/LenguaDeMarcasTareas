let usuarios = [];
let nombre, email, telefono, website, asunto, mensaje;

let formularioSubmit = (event)=>{
    event.preventDefault();

    nombre=document.getElementById("nombre").value;
    email=document.getElementById("email").value;
    telefono=document.getElementById("telefono").value;
    website=document.getElementById("web").value;
    asunto=document.getElementById("asunto").value;
    mesanje=document.getElementById("mensaje").value;

    let usuario = {
        nombre,
        email,
        telefono,
        website,
        asunto,
        mensaje
    }
    usuarios.push(usuario);
    console.log(usuarios);
    document.getElementById("formContacto").reset();
}
document.getElementById("formContacto").addEventListener("Submit",formularioSubmit);