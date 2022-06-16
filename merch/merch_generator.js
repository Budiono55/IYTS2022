// merch_generator.js
// Catalogue section initialization

let merch_list = document.querySelector('.merch-list')

for (items of cards){
    let barang = document.createElement('div')
    barang.classList.add('barang', 'col-12', 'col-lg-3')
    merch_list.appendChild(barang)
    // barang.setAttribute('name', items['name'])

    let image_barang = document.createElement('img')
    image_barang.setAttribute(
        'onclick', `switchDetail(
        '${items.name}', 
        [${items.img_sc.map((source) => {return `'${source}'`})}], 
        '${items.title}', 
        '${items.price}', 
        '${items.contact}', 
        '${items.specs}',
        '${items.spec_size}')`
    )

    let title_barang = document.createElement('span')
    title_barang.classList.add('items-title')

    let harga_barang = document.createElement('span')
    harga_barang.classList.add('items-price')

    image_barang.setAttribute('src', items.img_sc[0])
    title_barang.innerHTML = items.title
    harga_barang.innerHTML = `IDR ${items.price}`

    barang.appendChild(image_barang)
    barang.appendChild(title_barang)
    barang.appendChild(harga_barang)
}

// switchDetail function

const itemSection = (name, img_sc, title, price, contact, specs, spec_size) => { 
    let items_img = ""
    img_sc.forEach(img_path => {
        items_img += `<img src='${img_path}' alt='${name}' class='rounded'>`
    })

    return (
    `<div id='${name}' class='detail-container'>
        <div class='row'>
            <div class='col-1 col-sm-2 detail-back'>
                <a href='.'><i class='fa fa-arrow-circle-o-left'></i><span>Back</span></a>
            </div>
            <div class='col-6 detail-images'>
                ${items_img}
            </div>
            <div class='col-5 col-sm-4 detail-dtl'>
                <div class='detail-dtl-wrap'>
                    <h1 class='detail-title'>${title}</h1>
                    <span class='detail-price'>IDR ${price}</span>
                    <button class='btn btn-dark' onclick="window.open('https://wa.me/${contact}', '_blank')">BELI (WHATSAPP)</button>
                    <div class='detail-specs'>
                        <label>Specifications:</label>
                        ${specs}
                    </div>
                    ${spec_size !== 'undefined' ? `<img src='${spec_size}' class='detail-sizechart'` : ''}
                </div>
            </div>
        </div>
    </div>`
)}

function switchDetail(name, img_sc, title, type, price, contact, specs, spec_size){
    let merch_main = document.querySelector('#merch') 

    let merch_container = document.querySelector('.merch-container')

    merch_container.style.opacity = 0
    merch_container.style.transform = 'translateY(50%)'
    merch_container.style.position = 'absolute'
    window.setTimeout(() => {
        merch_container.style.display = 'none'
        merch_main.innerHTML += itemSection(name, img_sc, title, type, price, contact, specs, spec_size)
    }, 500)
    window.setTimeout(() => {
        let merch_detail = document.querySelector('.detail-container')
        merch_detail.setAttribute('style', 'opacity:1;transform:translateY(0);')
    }, 600)
    
}

// document.querySelector('body').innerHTML += itemSection(cards[0])

let detail_wrap = document.querySelector('.detail-dtl-wrap')

window.onscroll = () => {
    if(!detail_wrap){
        detail_wrap = document.querySelector('.detail-dtl-wrap')
    }
    detail_wrap.setAttribute('style', `margin-top: ${window.scrollY}px;`) 
}
