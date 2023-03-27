let navigation = document.querySelector('.navigation')

let bar_percet = document.querySelector('.bar-percent')


let box = document.querySelector('.box')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        navigation.classList.add('move')
    } else {
        navigation.classList.remove('move')
    }
})



box.data 