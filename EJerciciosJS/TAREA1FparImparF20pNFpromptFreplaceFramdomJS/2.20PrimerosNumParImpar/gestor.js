document.getElementById("form-number").addEventListener("submit", (event) => {
    event.preventDefault();

    let numero = parseInt(document.getElementById("input-number").value);
    let resultado = document.getElementById("resultado");
    parImpar(numero, resultado);

    // Llamar a cuentaPares después de manejar el evento del formulario
    cuentaPares(resultado);
});

function cuentaPares(resultado) {
    let cantidadPares = 0;
    let numeroPares = [];
    for (let i = 1; i <= 20; i++) {
        if (parImpar(i) === "par") { // Comprobando si es "par"
            cantidadPares++;
            numeroPares.push(i);
        }
    }
    // Mostrar los resultados en la caja de resultados
    resultado.value = `Hay ${cantidadPares} números pares: ${numeroPares.join(", ")}.`;
}

function parImpar(numero) {
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            return "par"; // Devuelve "par" si el número es par
        } else {
            return "impar"; // Devuelve "impar" si el número es impar
        }
    } else {
        return "no válido"; // Devuelve "no válido" si el número no es válido
    }
}
