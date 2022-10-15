newNumber = null

const entryNumber = document.querySelector('input')
let btn1 = document.querySelector("button")

btn1.addEventListener("click", function () {
    newNumber = entryNumber.value.trim();
    let apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: newNumber,
    }

    const {url, type, id} = apiData
    const apiUrl = `${url}${type}/${id}`
    
    fetch(apiUrl)
     .then( (data) => data.json())
     .then( (pokemon) => generateHtml(pokemon))


    const generateHtml = (data) => {
        console.log(data)
        const html = `
            <div class="name"> ${data.name}</div> 
            <img src=${data.sprites.front_default}>
            <div class="details">
              <span>height: ${data.height}</span>
              <span>weight: ${data.weight}</span>
            </div>
        `
        const pokemonDiv = document.querySelector('.PokeMon')
        pokemonDiv.innerHTML = html
    }

})






