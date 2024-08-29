document.getElementById('tweetButton').addEventListener('click', function() {
  var tweetText = document.getElementById('tweetInput').value;
  if (tweetText) {
      var tweetCard = document.createElement('div');
      tweetCard.className = 'card tweet-card';
      tweetCard.innerHTML = `
          <div class="card-body">
              <p class="card-text">${tweetText}</p>
          </div>
      `;
      document.getElementById('tweetDisplay').appendChild(tweetCard);
      document.getElementById('tweetInput').value = '';
  }
});
