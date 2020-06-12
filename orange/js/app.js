// id
const password = document.getElementById('password')
const eye = document.getElementById('eye')
const $l = document.querySelector('.left-arm')
const $r = document.querySelector('.right-arm')
const form = document.querySelector('.form')
const main = document.querySelector('.main')

//first event
password.addEventListener('click', () => {
    $l.style.transform = 'translate(-120%, -185%)rotate(-195deg) skewX(-20deg)'
    $l.animate([
        { transition: '0.5s ease' }
    ], { duration: 500, fill: 'forwards' })

    $r.style.transform = 'translate(10%, -200%)rotate(185deg) skewX(30deg)'
    $r.animate([
        { transition: '0.5s ease' }
    ], { duration: 500, fill: 'forwards' })
})
// second event
function uncoverRArm() {
    $r.style.transform = 'translate(10%, -110%)'
    $r.animate([
        { transition: '0.5s ease' }
    ], { duration: 500, fill: 'forwards' })
}
form.addEventListener('click', function (e) {
    if (event.target.matches('.form'))
        uncoverRArm()
})
//third event
function uncoverEyes() {
    $r.style.transform = 'translate(10%, -110%)'
    $r.animate([
        { transition: '0.5s ease' }
    ], { duration: 500, fill: 'forwards' })
    $l.style.transform = 'translate(-120%, -110%)'
    $l.animate([
        { transition: '0.5s ease' }
    ], { duration: 500, fill: 'forwards' })
}

main.addEventListener('click', function (e) {
    if (event.target.matches('.main'))
        uncoverEyes()
})

eye.addEventListener('click', () => {
    let tipo = document.getElementById('password')
    if (tipo.type == 'password') {
        tipo.type = 'text'
        uncoverRArm()
    } else {
        tipo.type = 'password'
        $l.style.transform = 'translate(-120%, -185%)rotate(-195deg) skewX(-20deg)'
        $l.animate([
            { transition: '0.5s ease' }
        ], { duration: 500, fill: 'forwards' })

        $r.style.transform = 'translate(10%, -200%)rotate(185deg) skewX(30deg)'
        $r.animate([
            { transition: '0.5s ease' }
        ], { duration: 500, fill: 'forwards' })
    }
})