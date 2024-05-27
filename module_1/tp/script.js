let mysteryWord = getRandomWord()
let attempt = 5
console.log(mysteryWord)

function getRandomWord() {
    let num = Math.floor(Math.random() * dico.length)
    return dico[num]
}

function createLetters() {
    let letters = document.getElementById('letters')
    for (let i = "A".charCodeAt(0); i <= 90; i++) {
        const button = document.createElement('button')
        button.innerText = String.fromCharCode(i)

        button.addEventListener('click', checkLetter)

        letters.append(button)
    }
}

function displayMysteryWord() {
    let domWord = document.getElementById("wordToFind")
    domWord.innerText = mysteryWord.replace(/\w/g, '_')
}

function checkLetter(e) {
    let letter = e.target.innerText

    let domWord = document.getElementById("wordToFind")
    let isGoodLetter = false

    for (let i = 0; i < mysteryWord.length; i++) {
        if (letter === mysteryWord[i]) {
            domWord.innerText =
                domWord.innerText.substring(0, i) + letter + domWord.innerText.substring(i + 1)
            isGoodLetter = true
        }
    }
    if (!isGoodLetter) {
        attempt--
        console.log(attempt)
    }

    e.target.disabled = true
    checkWinOrLoose()
}

function checkWinOrLoose() {
    let domWord = document.getElementById("wordToFind").innerText

    if (domWord === mysteryWord) {
        alert("Bravo, t'es un champion, champion !")
    } else {
        if (attempt == 0) {
            alert("C'est perdu !")
            document.getElementById("wordToFind").innerText = mysteryWord
        } else {
            document.getElementById('attempts').innerText = attempt
        }
    }
}

function addResetEvent() {

    document.getElementById('reset').addEventListener('click', function () {
        location.reload()
    })
}

function init() {
    createLetters()
    displayMysteryWord()
    addResetEvent()
}

init()

