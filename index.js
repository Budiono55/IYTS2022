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

window.onscroll = function(){
    let navbar = document.querySelector('.navbar')
    
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY){
            // navbar.classList.remove('bg-dark')
            // navbar.classList.add('bg-transparent')
            navbar.classList.add("navbar-hidden");
        }
        else{
            // navbar.classList.add('bg-dark')
            // navbar.classList.remove('bg-transparent')
            navbar.classList.remove("navbar-hidden");
        }
        lastScrollY = window.scrollY;
    });
    
    // if (window.pageYOffset > 180){
    //     navbar.classList.remove('bg-dark')
    //     navbar.classList.add('bg-transparent')
    // }
    // else{
    //     navbar.classList.add('bg-dark')
    //     navbar.classList.remove('bg-transparent')
    // }
}