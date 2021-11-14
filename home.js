if(document.body.classList.contains("homepage")) {
    function onLoaded(fn) {
        document.addEventListener("DOMContentLoaded", fn)
        if (document.readyState === "interactive" ||document.readyState === "complete" ) {fn()}
    }

    if(!window.sessionStorage.getItem("seensplash")) {
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

            window.sessionStorage.setItem("seensplash", true)
        })
    } else {
        onLoaded(() => {
            document.querySelector('body').classList.remove('loading')
            document.querySelector('body').classList.remove('starting-intro')
        })
    }
}

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

//account selectors grow/shrink their contents on click, only one can be selected at a time
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