var form = document.querySelector('form')
form.addEventListener('submit', function(e){
  // Bloqueia o refresh da página
  e.preventDefault()

  // Url da pesquisa
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";

  // Valor do unput name
  let name = document.getElementById('name')

  // Concatena a url com o input name
  urlForm = urlForm + this.name.value

  // Transforma os valores em minúsculas
  urlForm = urlForm.toLocaleLowerCase()

  // ID content
  let content = document.getElementById('content')

  // ID imgPokemon
  let img = document.getElementById('imgPokemon')

  // Resposta em HTML
  let html = ''

  fetch(urlForm)
    .then(content => content.json())
    .then(function(data){
      html = 'Nome: ' + data.name
      html = html + ' Tipo: ' + data.types[0].type.name
      content.innerHTML = html

      img.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
    .catch(function (err) {
      if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
        html = 'Pokémon não encontrado!'
      } else {
        html = err
      }
      content.innerHTML = html
    })
})