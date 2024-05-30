export class Popup {

    static show(content: string) {

        const popupContainer: HTMLDivElement = document.createElement('div')
        popupContainer.className = 'popup-container'

        const popupContent: HTMLDivElement = document.createElement('div')
        popupContent.className = 'popup-content'
        popupContent.innerHTML = content

        const closeButton: HTMLButtonElement = document.createElement('button')
        closeButton.innerText = "Fermer"
        closeButton.addEventListener('click', function () {
            popupContainer.remove()
        })

        document.body.appendChild(popupContainer)
            .appendChild(popupContent)
            .appendChild(closeButton)
    }

}