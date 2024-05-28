import {Question} from "./question.js";
import {Quiz} from "./quiz.js";


const q1 = new Question("ça va ?", ['oui', 'non', 'peut-être'], 2)
const q2 = new Question("Terre plate ?", ['oui', 'non', 'peut-être'], 0)
const q3 = new Question("Chocolatine ou pain de chocolat ?", ['Chocolatine', 'Pain au chocolat'], 1)

const quiz = new Quiz()
quiz.ajouterQuestion(q1)
quiz.ajouterQuestion(q2)
quiz.ajouterQuestion(q3)

quiz.afficherQuestion(q1)
document.getElementById('submit').addEventListener('click', function () {
   quiz.collecterReponse()
})


