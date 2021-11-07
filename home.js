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
let newStuffSelectors = document.querySelectorAll("#newstuff .selector")
for (let i = 0; i < newStuffSelectors.length; i++) {
    const selector = newStuffSelectors[i];

    selector.addEventListener('mousedown', function(){
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
}

let accountSelectors = document.querySelectorAll(".accountstuff .selector")
for (let i = 0; i < accountSelectors.length; i++) {
    const selector = accountSelectors[i];
    selector.addEventListener('mousedown', function(){
        let oldSelect = document.querySelector('.accountstuff .selector.selected')
        if(oldSelect) {
            oldSelect.classList.remove('selected')
            oldSelect.nextElementSibling.classList.remove('active')
        }

        selector.classList.add('selected')
        selector.nextElementSibling.classList.add('active')
    })			
}