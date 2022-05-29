let merch_list = document.querySelector('.merch-list')

for (items of cards){
    let barang = document.createElement('div')
    barang.classList.add('barang', 'col-3')
    merch_list.appendChild(barang)
    barang.setAttribute('name', items['name'])

    let image_barang = document.createElement('img')
    let title_barang = document.createElement('span')
    let harga_barang = document.createElement('span')
    image_barang.setAttribute('src', items['img_sc'])
    title_barang.innerHTML = items['title']
    harga_barang.innerHTML = items['harga']

    barang.appendChild(image_barang)
    barang.appendChild(title_barang)
    barang.appendChild(harga_barang)
}