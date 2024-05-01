document.addEventListener("DOMContentLoaded", (event) => {
    // Obtener referencia del boton
    let btnComprobar = document.getElementById("btn-comprobar");
    // Agregar el evento click al boton
    btnComprobar.addEventListener("click", comprobarPrimo);

    // Función para comprobar si un número es primo
    function comprobarPrimo() {
        // Obtener el valor del campo de entrada
        let numeroInput = document.getElementById("numeroInput");
        let numero = parseInt(numeroInput.value);

        // COMPRUEBA SI EL NUMERO ES VALIDO Y MAYOR QUE 1
        if (isNaN(numero) || numero <= 1) {
            mostrarResultado("Introduce un numero valido mayor que 1.");
            return;
        }

        // Comprobar si el número es primo
        function esPrimo(numero) {
            // Si el número es menor o igual a 1, no es primo
            if (numero <= 1) {
                return false;
            }
            // 2 y 3 son primos
            if (numero <= 3) {
                return true;
            }
            // Si es divisible por 2 o 3, no es primo
            if (numero % 2 === 0 || numero % 3 === 0) {
                return false;
            }
            // Comprobar los números que no son divisibles por 2 o 3
            // Se empieza desde 5 y se incrementa de 6 en 6
            for (let i = 5; i * i <= numero; i += 6) {
                if (numero % i === 0 || numero % (i + 2) === 0) {
                    return false;
                }
            }
            return true;
        }

        // Comprobar si el número es primo y mostrar el resultado
        if (esPrimo(numero)) {
            mostrarResultado(`${numero} es un número primo.`);
        } else {
            mostrarResultado(`${numero} no es un número primo.`);
        }
    }

    // Función para mostrar el resultado en el elemento
    function mostrarResultado(resultado) {
        // Obtener el elemento donde se mostrará el resultado
        let resultadoElement = document.getElementById("resultado");
        // Mostrar el resultado en el elemento
        resultadoElement.textContent = resultado;
    }
});
