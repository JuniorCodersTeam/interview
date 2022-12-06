stwórz funckję, która będzie wyświetlać odpowiednio znalezionego pokemona albo error


document.addEventListener("DOMContentLoaded", event => {

(async function getData(){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon")
  
    const toShow = await data.json()

    const div = document.querySelector(".dupa");
    const find = document.querySelector(".find");
    const button = document.querySelector(".search");

      button.addEventListener("click", event => {
        event.preventDefault();
        
        const pokemonName = find.value

        const pokemonFound = toShow.results.filter(el => el.name == pokemonName)

        pokemonFound.length ? showPicture(pokemonFound) : showError()

      })

      function showPicture(pokemonFound) {
        div.appendChild(document.createElement("div")).innerText = pokemonFound[0].url
      }
    
      function showError() {
        div.appendChild(document.createElement("div")).innerText = "ni chu chu"
      }
  })();
}) 
