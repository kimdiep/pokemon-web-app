var request = new XMLHttpRequest();

request.open('GET', 'https://api.pokemontcg.io/v1/cards?name=mimikyu', true)
request.onload = function() {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data.cards);
  } else {
    console.log('error')
  }
}

request.send();