const contacto = document.getElementById('contact')

contact.addEventListener('click', () => {
    contact2.style.display = "initial"
})

const cerrar = document.getElementById('close')

cerrar.addEventListener('click', () => {
    contact2.style.display = "none"
})
// cd over
const cd = document.querySelector('.cd1')
const cover = document.querySelector('.cover')

cd.addEventListener('mouseover', () => {
    cover.style.transform = 'rotate(0deg)'
    cover.style.left = '50%'
})
cd.addEventListener('mouseout', () => {
    cover.style.transform = 'rotate(90deg)'
    cover.style.left = '35%'
})
//cd over end


// const bg = document.querySelector('.bg')

// bg.addEventListener('click', () => {
//     cerrar.style.display = "none"
// })

const slider = [
    {
        id: 1,
        cd: "./album/cd1.png",
        cover: "./album/cover.png",
        album: "1"
    },
    {
        id: 2,
        cd: "./album/cd2.png",
        cover: "./album/cover.png",
        album: "2"
    },
    {
        id: 3,
        cd: "./album/cd3.png",
        cover: "./album/cover.png",
        album: "3"
    }
]

const pic = document.getElementById('album')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const album = document.getElementById('album')

let currentPic = 0

window.addEventListener('DOMContentLoaded', () => {
    showSlider(currentPic)
})

function showSlider() {
    const item = slider[currentPic]
    cd.src = item.cd
    album.textContent = item.album
}

next.addEventListener('click', () => {
    currentPic++
    if (currentPic > slider.length - 1) {
        currentPic = 0
    }
    showSlider(currentPic)
    pic.animate([{opacity: '0.2'}, {opacity:'1.0'}], {duration: 500, fill: 'forwards'})
})
prev.addEventListener('click', () => {
    currentPic--
    if (currentPic < 0) {
       currentPic = slider.length - 1
    }
    showSlider(currentPic)
    pic.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' })
})