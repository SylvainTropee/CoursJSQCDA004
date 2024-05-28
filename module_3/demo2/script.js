let pikachu;

fetch("https://pokeapi.co/api/v2/pokemon/pikachu"/*,
    {method: "GET", body: JSON.stringify({})}*/)
    .then(response => response.json())
    .then(data => {
        pikachu = data
        let img = document.createElement('img')
        img.src = pikachu.sprites['other']['home']['front_default']
        img.alt = pikachu.name
        document.getElementById('pickachu').append(img)
    })

console.log(pikachu)
