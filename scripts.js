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

      const box = document.createElement('div');
      box.setAttribute('class', 'box');

      const img = document.createElement('img');
      img.src = card.imageUrlHiRes;
      img.width = "300";
      img.height = "400";

      container.appendChild(box);
      box.appendChild(img);

    });
  } else {
    console.log('error')
  }
}

request.send();