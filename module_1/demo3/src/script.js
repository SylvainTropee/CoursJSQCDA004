function init() {

    const cities = ["Quimper", "Brest", "Concarneau", "Toulouse"]

    //récupération du select
    let select = document.getElementById("cities")

    cities.forEach(function (val) {
        let option = document.createElement('option')
        option.value = val.toLowerCase()
        option.innerText = val

        select.append(option)
    })

    //à la selection d'une option, j'affiche dans une balise p le nom de la ville
    select.addEventListener('change', function () {

        console.log(this)
        let p = document.createElement('p')
        p.innerText = this.value

        document.body.append(p)
    })
}

window.onload = init













