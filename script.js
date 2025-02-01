const collectionItem = document.querySelectorAll('.ianim')
collectionItem.forEach((item) => {
    item.addEventListener('mousemove', (event) => {
        item.style.cssText = `
            background: radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, rgb(170, 170, 170), rgb(255, 255, 255));
            transform: rotate3d(${event.offsetX}, ${event.offsetY}, 0, 5deg);
        `
    })
    item.addEventListener('mouseleave', (event) => {
        item.style.cssText = `
           background: radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, rgb(255, 255, 255), rgb(255, 255, 255));;
           transform: rotate3d(1, 1, 0, 0deg);
        `
    })
})

const header = document.querySelector('header')
const botomHeader = document.querySelector('.botomHeader')
const footer = document.querySelector('footer')
window.addEventListener('scroll', (event) => {
    const levelScroll = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight

    if (levelScroll + window.innerHeight > scrollHeight - 175) {
        header.style.transform = `translateY(-200%)`
        botomHeader.style.transform = `translateY(0)`
    } else {
        header.style.transform = `translateY(0%)`
        botomHeader.style.transform = `translateY(150%)`
    }

    if (window.scrollY > 30) {
        header.classList.add('headerIsMoving')
    }
    else {
        header.classList.remove('headerIsMoving')
    }
})
if (window.scrollY > 30) {
    header.classList.add('headerIsMoving')
}
const menuOpen = document.querySelector('#menuOpen')
const menuClose = document.querySelector('#menuClose')
const aside = document.querySelector('aside')
menuOpen.onclick = function () {
    aside.classList.add('menuIsOpen')
}
menuClose.onclick = function () {
    aside.classList.remove('menuIsOpen')
}
const back = document.querySelector('.logo_center p')
back.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}