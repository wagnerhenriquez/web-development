document.addEventListener('wheel', function (e) {
    if (e.type != 'wheel') {
        return;
    }
    let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    delta = delta * (-300);
    document.documentElement.scrollLeft -= delta;
    // safari needs also this
    document.body.scrollLeft -= delta;
    e.preventDefault();
});

const contacto = document.getElementById('contact')

contact.addEventListener('click', () => {
    contact2.style.display = "initial"
})

const cerrar = document.getElementById('close')

cerrar.addEventListener('click', () => {
    contact2.style.display = "none"
})