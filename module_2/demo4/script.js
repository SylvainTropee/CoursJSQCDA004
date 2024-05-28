class Animal {

    #species
    #subClass
    _name

    constructor(species, subClass, name) {
        this.#species = species
        this.#subClass = subClass
        this._name = name
    }

    getSound() {
        return `${this.name} fait son cri, car c'est un ${this.species.toLowerCase()}`
    }

    get species() {
        return this.#species;
    }

    set species(value) {
        this.#species = value;
    }

    get subClass() {
        return this.#subClass;
    }

    set subClass(value) {
        this.#subClass = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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


/////////////////////
//Fonctionnalités ES6//
///////////////////////


const billion = 1_000_000_000
console.log(billion)

let user = {
    name : 'Michel',
    address : null
}

console.log(user.address?.street ?? "Rue bidule")

//spread
let tab1 = [1,2,3,4]
let tab2 = [5,6,7,8]

tab1.push(...tab2)
console.log(tab1)

for (const num of tab1) {
    console.log(num)
}
















