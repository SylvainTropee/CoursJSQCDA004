class Sport {

    private _id: number
    public name: string
    public category: string


    constructor(id: number, name: string, category: string = "collectif") {
        this._id = id;
        this.name = name;
        this.category = category;
    }

    public display(): string {
        return `${this.name} est un sport ${this.category}`
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}

let climbing: Sport = new Sport(1, "Escalade", "individuel")
console.log(climbing.display())

class CarSport extends Sport implements Jouable {

    public nbWheel: number
    score: number;

    constructor(id: number, name: string, category: string, nbWheel: number) {
        super(id, name, category);
        this.nbWheel = nbWheel
    }

    /** Override */
    public display(): string {
        return super.display() + " et a " + this.nbWheel + " roues";
    }


    play(j1: string, j2: string): string {
        return `${j1} est vainqueur et a comme score : ${this.score}`;
    }
}

let karting: CarSport = new CarSport(2, "Karting", "individuel", 4)
console.log(karting.display())
karting.score = 10
console.log(karting.play("Michel", "Regis"))

interface Jouable {
    score: number

    play(j1: string, j2: string): string
}

interface play {
    (j1: string, j2: string): string
}

let playBattle: play = function (j1: string, j2: string): string {
    return `${j2} est le vainqueur`
}

console.log(playBattle("Michel", "J-P"))












