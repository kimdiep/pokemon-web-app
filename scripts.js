var request = new XMLHttpRequest();

request.open('GET', 'https://api.pokemontcg.io/v1/cards?name=mimikyu', true)
request.onload = function() {

  var data = JSON.parse(this.response)
  var cards = data.cards;

  if (request.status >= 200 && request.status < 400) {
    cards.forEach(card => {
      console.log(card.imageUrlHiRes);
    });
  } else {
    console.log('error')
  }
}

request.send();