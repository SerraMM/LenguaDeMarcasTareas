
let tweet;

document.getElementById("formPublicacion").addEventListener("submit", (event)=>{
    event.preventDefault();
    tweet=document.getElementById("tweet").value;
    document.getElementById("tweetCarta").textContent= tweet;
    document.getElementById("tweetPublicado").style.display = "block";
})

/*document.querySelector('form').addEventListener('submit', function(event) {
    // Prevenir la recarga de la página
    event.preventDefault();

    // Obtener el valor del tweet
    var tweet = document.getElementById('tweet').value;

    // Colocar el tweet en el texto de la tarjeta
    document.querySelector('.card-text').textContent = tweet;

    // Mostrar la tarjeta
    document.getElementById('tweetPublicado').style.display = 'block';
});*/