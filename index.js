var burgerMenu = document.querySelector('#burger-menu-modal')
var burgerOverlay = document.querySelector('.burger-menu-overlay')

function openMenu(){
    burgerMenu.style.left = 0
    burgerOverlay.style.visibility = 'visible'
    burgerOverlay.style.opacity = 0.4
}

function closeMenu(){
    burgerMenu.removeAttribute('style')
    burgerOverlay.style.opacity = 0
    setTimeout(function(){
        burgerOverlay.removeAttribute('style')
    }, 400)
}

window.onclick = function(event){
    if (event.target == burgerOverlay) {
        closeMenu()
    }
}