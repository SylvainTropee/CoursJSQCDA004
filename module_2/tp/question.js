export class Question {

    #enonce
    #reponses
    #reponseCorrecte

    constructor(enonce, reponses, reponseCorrecte) {
        this.#enonce = enonce
        this.#reponses = reponses
        this.#reponseCorrecte = reponseCorrecte
    }

    afficher() {
        let div = document.createElement('div')

        let p = document.createElement('p')
        p.innerText = this.enonce
        div.append(p)

        let divReponses = document.createElement('div')

        this.reponses.forEach(function (val, idx) {

            const input = document.createElement('input')
            const label = document.createElement('label')
            //input
            input.type = 'radio'
            input.name = 'reponses'
            input.value = idx
            input.id = `reponse-${idx}`
            divReponses.append(input)
            //label
            label.setAttribute('for', `reponse-${idx}`)
            label.innerText = val
            divReponses.append(label)
        })
        div.append(divReponses)

        return div
    }


    get enonce() {
        return this.#enonce;
    }

    set enonce(value) {
        this.#enonce = value;
    }

    get reponses() {
        return this.#reponses;
    }

    set reponses(value) {
        this.#reponses = value;
    }

    get reponseCorrecte() {
        return this.#reponseCorrecte;
    }

    set reponseCorrecte(value) {
        this.#reponseCorrecte = value;
    }
}