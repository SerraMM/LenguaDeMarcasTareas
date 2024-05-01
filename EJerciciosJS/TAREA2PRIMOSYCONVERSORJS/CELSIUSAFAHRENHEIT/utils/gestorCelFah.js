let inputCelsius = document.getElementById("Celsius");
let btnConvertir = document.getElementById("convertir");
let btnLimpiar = document.getElementById("limpiar");
let resultado = document.getElementById("resultado");

btnConvertir.addEventListener("click", () => {
    let celsius = parseFloat(inputCelsius.value);

    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 1.8) + 32;
        resultado.innerHTML = `Grados Fahrenheit: ${fahrenheit.valueOf(2)}`;
    } else {
        resultado.innerHTML = "Por favor, introduzca un valor válido para los grados Celsius.";
    }
});

btnLimpiar.addEventListener("click", () => {
    inputCelsius.value = "";
    resultado.innerHTML = "";
});
