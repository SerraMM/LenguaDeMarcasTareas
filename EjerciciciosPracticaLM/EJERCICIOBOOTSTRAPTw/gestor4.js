
let tweet;

document.getElementById("formPublicar").addEventListener("submit", event =>{
    event.preventDefault();

    tweet=document.getElementById("tweet").value;
    document.getElementById("tweetCarta").textContent=tweet;
    document.getElementById("cajaTweet").style.display = "block";
})