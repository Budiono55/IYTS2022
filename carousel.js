let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})



function anim(e){
    let timeline_img = e.target
    let card_img = timeline_img.parentElement
    let card_name = timeline_img.classList[1]
    let timeline_imgs = document.querySelectorAll(`.${timeline_img.classList[1]}`)

    timeline_imgs.forEach((el) => {
        let dtl = document.createElement('div')
        dtl.classList.add('timeline-detail')

        let el_card = el.parentElement
        dtl = el_card.insertBefore(dtl, el)
        dtl.setAttribute('style', `width: ${timeline_img.width}px;height:${card_img.clientHeight}px;`)

        let dtl_overlay = document.createElement('div')
        dtl_overlay.classList.add('timeline-detail-overlay')

        // animation
        el.setAttribute('style', 'left: -100%')
        card_img.setAttribute('style', `width: ${timeline_img.width}px`)

        // add description div
        let title = document.createElement('h3')
        let desc = document.createElement('div')
        desc.classList.add('card-desc')

        let learn = document.createElement('div')
        learn.classList.add("card-learn")
        learn.innerHTML = "<a>Learn More</a>"
        learn.querySelector('a').setAttribute('style', 'z-index: 0')

        cards.forEach((card) => {
            if (card.name == card_name){
                title.innerHTML = card.title
                desc.innerHTML = card.description
                learn.querySelector('a').href = card.link
            }
        })

        dtl.appendChild(title)
        dtl.appendChild(desc)
        dtl_overlay = dtl.appendChild(dtl_overlay)
        dtl.appendChild(learn)

        // end

        window.setTimeout(() => {
            learn.querySelector('a').removeAttribute('style')
            card_img.removeAttribute('style')
            dtl_overlay.setAttribute('onclick', 'animReverse(event)')
        }, 500)
    })

}



function animReverse(e){

    let timeline_detail = e.target.parentElement

    let timeline_img = timeline_detail.nextSibling

    let timeline_imgs = document.querySelectorAll(`.${timeline_img.classList[1]}`)



    timeline_imgs.forEach((el) => {

        let el_card = el.parentElement

        let dtl = el.previousElementSibling

        let learn = dtl.querySelector('.card-learn').querySelector('a').setAttribute('style', 'z-index: 0')

        // animation

        el_card.setAttribute('style', `width: ${timeline_img.width}px`)

        el.removeAttribute('style')


        //end

        window.setTimeout(() => {

            dtl.remove()

            el_card.removeAttribute('style')

        }, 500)

    })

}



function resizeCard(){

    let timeline_img = document.querySelector('.active .img-fluid')

    let imgs = Array.from(document.querySelectorAll('.img-fluid'))



    let img = imgs.filter(function(e){

        try{

            return e.previousSibling.classList[0] == 'timeline-detail'

        }

        catch(err){

            //nothing

        }

    })



    img.forEach((el) => {

            let dtl = el.previousElementSibling

            dtl.setAttribute('style', `width: ${timeline_img.width}px`)  

    })

}



window.addEventListener('resize', resizeCard)