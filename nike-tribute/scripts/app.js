const slider = [
    {
        id: 1,
        img: "./images/producto-03.jpg",
    },
    {
        id: 2,
        img: "./images/producto-02.jpg",
    }
]
const img = document.getElementById('pic')
const l = document.getElementById('l')
const r = document.getElementById('r')
const h = document.getElementById('header')
const m = document.getElementById('message')

let currentPic = 0

window.addEventListener('DOMContentloaded', () => {
    showSlider(currentPic)
})

function showSlider() {
    const item = slider[currentPic]
    img.src = item.img
}

r.addEventListener('click', () => {
    currentPic++
    if (currentPic > slider.length - 1) {
        currentPic = 0
        h.style.backgroundColor = '#cd071d'
    }
    if (currentPic > slider.length - 2) {
        h.style.backgroundColor = '#008dff'
    }
    showSlider(currentPic)
})

l.addEventListener('click', () => {
    currentPic++
    if (currentPic > slider.length - 1) {
        currentPic = 0
        h.style.backgroundColor = '#cd071d'
    }
    if (currentPic > slider.length - 2) {
        h.style.backgroundColor = '#008dff'
    }
    showSlider(currentPic)
})

m.addEventListener('click', () => {
    m.style.padding = '10px 0 50px'
})