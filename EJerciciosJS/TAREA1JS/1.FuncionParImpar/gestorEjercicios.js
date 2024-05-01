
/*let numero = parseInt(prompt("Introduce un numero: "));

function parImpar(numero){
    if(!isNaN(numero)){
        if (numero % 2==0){
        console.log("El numero es par.");
    }else{
        console.log("El numero es impar.");
    }
 }else{
    console.log("Introduce un numero valido.")
 }    
}*/

document.getElementById("form-number").addEventListener("submit",(event)=>{
    event.preventDefault();

    let numero = document.getElementById("input-number").value;
    let resultado = document.getElementById("resultado");
    parImpar(numero, resultado);
});

    function parImpar(numero, resultado){
    if(!isNaN(numero)){
        if (numero % 2==0){
        resultado.value = "El numero es par.";
    }else{
        resultado.value = "El numero es impar.";
    }
}else{
    resultado.value ="Introduce un dato numero valido";
}
}


