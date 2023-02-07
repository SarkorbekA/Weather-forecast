export function main() {
    const nav = document.querySelectorAll('.dates_list-item')
    const swiper = document.querySelectorAll('.swiper_item')
    const pick = document.querySelectorAll('.regions__pick')
    const region = document.querySelectorAll('.regions__list')
    const infoBtn = document.querySelectorAll('.information__btn')
    const tabs = document.querySelectorAll('.tabsContentItem');


    for (let i = 0; i < infoBtn.length; i++) {
        infoBtn[i].addEventListener('click', function () {
            for (let j = 0; j < infoBtn.length; j++) {
                infoBtn[j].classList.remove('active')
                tabs[j].classList.remove('active')
            }
            infoBtn[i].classList.add('active')
            tabs[i].classList.add('active')
        })
    }


    for (let i = 0; i < pick.length; i++) {
        pick[i].addEventListener('click', function () {
            for (let j = 0; j < pick.length; j++) {
                pick[j].classList.remove('active')
                region[j].classList.remove('active')
            }
            pick[i].classList.add('active')
            region[i].classList.add('active')
        })
    }

    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', function () {
            for (let j = 0; j < nav.length; j++) {
                nav[j].classList.remove('active')
            }
            nav[i].classList.add('active')
        })
    }

    for (let i = 0; i < swiper.length - 1; i++) {
        swiper[i].addEventListener('click', function () {
            for (let j = 0; j < swiper.length; j++) {
                swiper[j].classList.remove('active')
            }
            swiper[i].classList.add('active')
        })
    }
}

