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

        dtl.setAttribute('style', `width: ${timeline_img.width}px;height:${card_img.clientHeight}px;cursor:pointer`)

        dtl.setAttribute('onclick', 'animReverse(event)')



        // animation

        el.setAttribute('style', 'left: -100%')

        card_img.setAttribute('style', `width: ${timeline_img.width}px`)

        // add description div

        let title = document.createElement('h3')
        let desc = document.createElement('span')
        
        let card_desc

        cards.forEach((card) => {
            if (card.name == card_name){
                title.innerHTML = card.title
                desc.innerHTML = card.description
            }
        })

        dtl.appendChild(title)
        dtl.appendChild(desc)

        // end

        window.setTimeout(() => {

            card_img.removeAttribute('style')

        }, 500)

    })

}



function animReverse(e){

    let timeline_detail = e.target

    let timeline_img = timeline_detail.nextSibling

    let timeline_imgs = document.querySelectorAll(`.${timeline_img.classList[1]}`)



    timeline_imgs.forEach((el) => {

        let el_card = el.parentElement

        let dtl = el.previousElementSibling



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