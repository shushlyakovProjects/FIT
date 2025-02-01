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
const footer = document.querySelector('footer')
window.addEventListener('scroll', (event) => {
    let Y = header.getBoundingClientRect(header).bottom
    let block = document.elementFromPoint(500, Y)
    console.log(block);
    if (block == footer) {
        header.style.bottom = `0`
        header.innerHTML = `
        <div class="logo">
        <div class="logo_left">
            <p>FIT</p>
        </div>`
    }
    else {
        header.style.bottom = `90%`
        header.innerHTML = `
            <div class="logo">
        <div class="logo_left">
            <p>FIT</p>
        </div>
        <div class="logo_right">
            <p>Инвестиции<br>в IT - стартапы</p>
        </div>
    </div>
    <nav>
        <a href="#">Проекты</a>
        <a href="#">Как это работает</a>
        <a href="#">Стартапу</a>
        <a href="#">Контакты</a>
    </nav>
    `
    }
    if (window.scrollY > 30) {
        header.style.backgroundColor = `white`
        header.style.borderRadius = `40px`
        header.style.padding = `7px 8%`
        header.style.marginTop = `20px`
    }
    else {
        header.style.backgroundColor = `transparent`
        header.style.borderRadius = `0`
        header.style.padding = `15px 8%`
        header.style.marginTop = `0`
    }
})
if (window.scrollY > 30) {
    header.style.backgroundColor = `white`
    header.style.borderRadius = `40px`
    header.style.padding = `7px 8%`
    header.style.marginTop = `20px`
}