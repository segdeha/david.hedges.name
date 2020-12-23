function coverFlipHint() {
    let covers = document.querySelectorAll('.cover')
    function flipHint() {
        for (let i = 0; i < covers.length; i += 1) {
            covers[i].classList.add('hovered')
        }
        setTimeout(unFlipHint, 250)
    }
    function unFlipHint() {
        for (let i = 0; i < covers.length; i += 1) {
            covers[i].classList.remove('hovered')
        }
    }
    if (covers.length > 0) {
        // wait a second, then hint that the cover can be flipped
        setTimeout(flipHint, 1000)
    }
}

function init() {
    coverFlipHint()
}

document.addEventListener('DOMContentLoaded', init)