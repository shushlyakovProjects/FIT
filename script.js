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
           background-color: white;
           transform: rotate3d(1, 1, 0, 0deg);
        `
    })
})