function Animal(species, classs, name) {
    this.species = species;
    this.class = classs;
    this.name = name;
    this.getSound = function () {
        return `${this.name} fait son cri, car c'est un ${this.species.toLowerCase()}`
    }
}

const animal1 = new Animal('Chat', 'Mammifère', 'Toto')
const animal2 = new Animal('Diplodocus', 'Dinosaure', 'Denver')

console.log(animal1.species)
console.log(animal1['name'])
console.log(animal1.getSound())

//ajout de propriété au prototype
Animal.prototype.breed = null

animal1.breed = "Sphynx"
animal2.breed = "Reptile"

const animal3 = new Animal('Kangourou', 'Mammifère', 'Skippy')

console.log(animal1)
console.log(animal2)
console.log(animal3)