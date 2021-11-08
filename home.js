function onLoaded(fn) {
    document.addEventListener("DOMContentLoaded", fn)
    if (document.readyState === "interactive" ||document.readyState === "complete" ) {fn()}
}

onLoaded(() => {
    setTimeout(()=>{
        document.querySelector('body').classList.remove('loading')
    }, 200)

    setTimeout(()=>{
        document.querySelector('body').classList.remove('starting-intro')
        document.querySelector('body').classList.add('intro')
    }, 1800)

    setTimeout(()=>{
        document.querySelector('body').classList.remove('intro')
    }, 4200)
})

//when people click the highlight selector, swap the image and text being shown by toggling the highlighted class
document.querySelectorAll("#newstuff .selector").forEach(selector => {
    selector.addEventListener('click', function(){
        let oldSelect = document.querySelector('#newstuff .selector.selected')
        if(oldSelect) {
            oldSelect.classList.remove('selected')
            let oldHighlight = oldSelect.getAttribute('highlights')
            
            //remove any old highlight
            let oldHighlightElements = document.querySelectorAll(`.highlight-${oldHighlight}`).forEach(e => e.classList.remove('highlighted'))
        }

        selector.classList.add('selected')
        document.querySelectorAll(`.highlight-${selector.getAttribute('highlights')}`).forEach(e => e.classList.add('highlighted'))
    })			
})

document.querySelectorAll(".accountstuff .selector").forEach(selector => {
    selector.addEventListener('click', function(){
        let oldSelect = document.querySelector('.accountstuff .selector.selected')
        if(oldSelect) {
            oldSelect.classList.remove('selected')
            oldSelect.nextElementSibling.classList.remove('active')
        }

        selector.classList.add('selected')
        selector.nextElementSibling.classList.add('active')
    })			
})

//video overlay + opener for media
document.querySelectorAll('.vid-opener').forEach(e => {
    e.style.backgroundImage = `url(https://i.ytimg.com/vi/${e.getAttribute('data-vid')}/maxresdefault.jpg)`

    e.addEventListener('click', function(){
        document.body.classList.add('open-vid')
        document.querySelector('.video-container iframe').src = `https://www.youtube.com/embed/${e.getAttribute('data-vid')}`
    })
})

document.querySelectorAll('.image-opener').forEach(e => {
    e.addEventListener('click', function(){
        document.body.classList.add('open-img')
        document.querySelector('.gallery-container .gallery-image').src = e.style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '')
    })
})

document.querySelectorAll('.media-bg, .media-close').forEach(e => {
    e.addEventListener('click', ()=> {
        document.body.classList.remove('open-vid')
        document.body.classList.remove('open-img')
        document.querySelector('.video-container iframe').src = ""
    })
})