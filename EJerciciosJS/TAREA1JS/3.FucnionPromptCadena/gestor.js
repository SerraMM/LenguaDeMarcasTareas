document.addEventListener("DOMContentLoaded", function() {
    // Mostrar prompt al usuario
    let frase = prompt("Introduce una frase:");

    // Llamar a la función verificarMayusculasOMinusculas con la cadena introducida
    verificarMayusculasOMinusculas(frase);
});

function verificarMayusculasOMinusculas(frase) {
    // Comprobar si la frase está formada solo por mayúsculas
    if (frase === frase.toUpperCase()) {
        mostrarResultado("La frase está formada solo por mayúsculas.");
    }
    // Comprobar si la frase está formada solo por minúsculas
    else if (frase === frase.toLowerCase()) {
        mostrarResultado("La frase está formada solo por minúsculas.");
    }
    // Si la frase contiene una combinación de mayúsculas y minúsculas
    else {
        mostrarResultado("La frase contiene una combinación de mayúsculas y minúsculas.");
    }
}

function mostrarResultado(resultado) {
    // Obtener el elemento result del HTML
    let resultElement = document.getElementById("result");
    // Mostrar el resultado en el elemento result
    resultElement.textContent = resultado;
}