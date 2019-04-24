const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://api.pokemontcg.io/v1/cards?name=mimikyu', true)
request.onload = function() {

  var data = JSON.parse(this.response)
  var cards = data.cards;

  if (request.status >= 200 && request.status < 400) {
    cards.forEach(card => {

      const img = document.createElement('img');
      img.src = card.imageUrlHiRes;

      container.appendChild(img);

    });
  } else {
    console.log('error')
  }
}

request.send();