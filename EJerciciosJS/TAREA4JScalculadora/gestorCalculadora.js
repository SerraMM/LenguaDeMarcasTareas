
document.getElementById('botonSuma').addEventListener('click', () => calcular('+'));
document.getElementById('botonResta').addEventListener('click', () => calcular('-'));
document.getElementById('botonMultiplicar').addEventListener('click', () => calcular('*'));
document.getElementById('botonDividir').addEventListener('click', () => calcular('/'));
let historial = [];
let calcular = operacion => {
    let operador1 = parseFloat(document.getElementById('inputOperador1').value);
    let operador2 = parseFloat(document.getElementById('inputOperador2').value);
    let resultado;
    let descripcionOperacion;

    switch (operacion) {
            case '+':
                resultado = operador1 + operador2;
                descripcionOperacion = `${operador1} + ${operador2} = ${resultado}`;
                break;
            case '-':
                resultado = operador1 - operador2;
                descripcionOperacion = `${operador1} - ${operador2} = ${resultado}`;
                break;
            case '*':
                resultado = operador1 * operador2;
                descripcionOperacion = `${operador1} * ${operador2} = ${resultado}`;
                break;
            case '/':
                if (operador2 === 0) {
                    resultado = 'Error: División por cero';
                    descripcionOperacion = `Intento de división por cero con ${operador1}`;
                } else {
                    resultado = operador1 / operador2;
                    descripcionOperacion = `${operador1} / ${operador2} = ${resultado}`;
                }
                break;
        }

    document.getElementById('resultado').value = resultado;
    historial.push(descripcionOperacion);
    console.log(historial);
};

// limpiarFormulario
let limpiarFormulario = () => {
    document.getElementById('inputOperador1').value = '';
    document.getElementById('inputOperador2').value = '';
    document.getElementById('resultado').value = '';
};

//limpieza
document.getElementById('botonLimpiar').addEventListener('click', limpiarFormulario);
