function fonctionQuiPrendDutemps(number) {

    let i = 0;

    while (i < 1_000_000_000) {
        i++
    }

    console.log("Fin de fonction qui prend du temps - " + number)
}

function promesse() {
    return Promise.resolve().then(
        fonctionQuiPrendDutemps
    )
}

async function getCar(number) {

    const cars = {
        1: "Fiesta",
        2: "Sandero",
        3: "Clio",
        4: "308",
    }

    fonctionQuiPrendDutemps(number)
    return cars[number]
}

async function run(){

    const fiesta = await getCar(1)
    const clio = await getCar(2)
    return [fiesta, clio]
}

async function run2(){

    const fiesta = getCar(3)
    const clio = getCar(4)
    return await Promise.all([fiesta, clio])
}


async function getPokemon(){
     let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    if(response.ok){
        return response.json()
    }
}

console.log("Début du programme")
//console.log(fonctionQuiPrendDutemps())
run().then(data => console.log(data))
run2().then(data => console.log(data))
console.log("Fin du programme")