export class Quiz {

    #questions
    #score
    #index

    constructor() {
        this.#questions = [];
        this.#score = 0;
        this.#index = 0
    }

    afficherQuestion(question) {
        document.getElementById('quiz').innerHTML = ""
        document.getElementById('quiz').append(question.afficher())
    }

    collecterReponse() {

        const reponse = document.querySelector('input[name=reponses]:checked').value
        if (reponse && reponse == this.questions[this.index].reponseCorrecte) {
            this.score++
        }
        this.index++
        this.afficherQuestionSuivante()
    }

    afficherQuestionSuivante() {
        if (this.index == this.questions.length) {
            this.afficherResultat()
        } else {
            this.afficherQuestion(this.questions[this.index])
        }
    }

    ajouterQuestion(question){
        this.questions.push(question)
    }

    afficherResultat() {
        document.getElementById('quiz').innerText = `Vous avez ${this.score} points !`
        document.getElementById('submit').remove()
    }

    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get index() {
        return this.#index;
    }

    set index(value) {
        this.#index = value;
    }
}