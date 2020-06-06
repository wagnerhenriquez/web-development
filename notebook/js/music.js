const contacto = document.getElementById('contact')

contact.addEventListener('click', () => {
    contact2.style.display = "initial"
})

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

const cerrar = document.getElementById('close')

cerrar.addEventListener('click', () => {
    contact2.style.display = "none"
})

// document.addEventListener('wheel', function (e) {
//     if (e.type != 'wheel') {
//         return;
//     }
//     let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
//     delta = delta * (-300);
//     document.documentElement.scrollLeft -= delta;
//     // safari needs also this
//     document.body.scrollLeft -= delta;
//     e.preventDefault();
// });