//Inicializar un contador para llevar la cuenta de los numeros mayores a 25
let contadorMayores25=0;

//Generar 10 numeros aleatorios entre 1 y 50 e imprimirlos
for (let i=0; i<10; i++){
    let num = Math.floor(Math.random()*50)+1; //GENERAR UN NUMERO ALEATORIO ENTRE 1 Y 50
    console.log("Numero aleatorio:", num);

    //verificar si el numero es mayor que 25
    if(num >25){
        contadorMayores25++; //Incremental el contrado si el numero es mayor a 25
    }

//MOSTRAR POR CONSOLA
console.log("Cantidad de numeros mayores a 25: ", contadorMayores25);
}