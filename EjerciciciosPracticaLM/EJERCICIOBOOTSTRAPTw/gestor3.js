let tweet;

document.getElementById("formPublicacion").addEventListener("submit", event =>{
    event.preventDefault();
    tweet=document.getElementById("tweet").value;
    document.getElementById("tweetCarta").textContent= tweet;
    document.getElementById("tweetPublicado").style.display = "block";
})