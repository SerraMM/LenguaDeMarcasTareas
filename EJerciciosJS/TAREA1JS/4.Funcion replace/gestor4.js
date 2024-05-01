// Solicitar al usuario que ingrese una cadena
let cadena= prompt("Ingrese una cadena:")
//Reemplar espacios en blanco por '/'
let cadenaModificada = cadena.replace(/\s/g, '/');

console.log("Cadena original: ", cadena);
console.log("Cadena modificada: ", cadenaModificada);