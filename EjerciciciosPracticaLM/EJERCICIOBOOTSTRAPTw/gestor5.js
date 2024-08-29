let tweet;
document.getElementById("formTweet").addEventListener("submit", event=>{
    event.preventDefault();
    tweet=document.getElementById("tweet").value;
    document.getElementById("cartaTweet").textContent=tweet;
    document.getElementById("tweetPublicado").style.display="block";
})