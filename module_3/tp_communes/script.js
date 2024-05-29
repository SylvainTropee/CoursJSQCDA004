async function callApi(url) {

    let response = await fetch(url)

    if (response.ok) {//response.status == 200
        return response.json()
    }
}

async function getDepartements() {

    let dep = await callApi("https://geo.api.gouv.fr/departements")

    dep.forEach(function (val) {

        let option = document.createElement("option");
        option.text = `${val.code} - ${val.nom}`
        option.value = val.code

        document.getElementById('dep').append(option)
    })
}

function addEvents() {

    let dep = document.getElementById('dep')
    dep.addEventListener('change', function (e) {
        getCities(this.value)
    })

    let cities = document.getElementById('cities')
    cities.addEventListener('change', function (e) {
        getCityDetail(this.value)
    })
}

async function getCityDetail(cityCode) {
    let city = await callApi("https://geo.api.gouv.fr/communes/" + cityCode)

    let p = document.createElement('p')
    p.innerText = `Nom : ${city.nom}, population : ${city.population}, CP : ${city.codesPostaux.join('-')}`

    document.body.append(p)
}

async function getCities(depCode) {

    let cities = await callApi("https://geo.api.gouv.fr/departements/" + depCode + "/communes?fields=nom,code")
    document.getElementById('cities').innerHTML = "<option selected disabled>- Communes -</option>"

    cities.forEach(function (val) {
        const option = document.createElement("option");
        option.text = val.nom
        option.value = val.code

        document.getElementById('cities').append(option)
    })
}


function init() {
    getDepartements()
    addEvents()
}

init()