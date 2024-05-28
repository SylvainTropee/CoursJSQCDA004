const animal1 = {
    species: 'Chat',
    class: 'Mammifère',
    name: 'Toto',
    getSound: function () {
        return `${this.name} miaule, car c'est un ${this.species.toLowerCase()}`
    }
}

console.log(animal1.species)
console.log(animal1['name'])
console.log(animal1.getSound())

//ajout de propriété
animal1.breed = "Sphynx"

console.log(animal1)