export function burger() {
    let burger = document.querySelector('.burger__menu');
    let overlay = document.querySelector('.overlay');
    let navBtn = document.querySelector('.navbar__btn');
    let body = document.querySelector('body')
    let exit = document.querySelector('.exit')

    navBtn.addEventListener('click', function () {
        burger.classList.add('active')
        overlay.classList.add('active')
        body.classList.add('active')
    })

    overlay.addEventListener('click', function () {
        burger.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('active')
    })

    exit.addEventListener('click', function () {
        burger.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('active')
    })

}