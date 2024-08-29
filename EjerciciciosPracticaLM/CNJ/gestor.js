
let usuarios=[];
let nombre,email,telefono,web,asunto,mensaje;

let formSubmit = (event)=>{
    event.preventDefault();

    nombre=document.getElementById("nombre").value;
    email=document.getElementById("email").value;
    telefono=document.getElementById("telefono").value;
    web=document.getElementById("web").value;
    asunto=document.getElementById("asunto").value;
    mensaje=document.getElementById("mensaje").value;

    let usuario = {
        nombre,
        email,
        telefono,
        web,
        asunto,
        mensaje
    }
    usuarios.push(usuario);

    console.log(usuarios);

    document.getElementById("formContacto").reset;
}

document.getElementById("formContacto").addEventListener("submit",formSubmit);