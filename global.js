/* lazy-loading, courtesy of https://codepen.io/imagekit_io/pen/RBXVrW */
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {  
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");
        
        function lazyload () {
            if(lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }    

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if(lazyloadImages.length == 0) { 
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
})

//video overlay + opener for media, used across homepage + notes and guides
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

document.querySelectorAll('.md p img').forEach(e => {
    e.addEventListener('click', function(){
        document.body.classList.add('open-img')
        document.querySelector('.gallery-container .gallery-image').src = e.src
    })
})

document.querySelectorAll('.media-bg, .media-close').forEach(e => {
    e.addEventListener('click', ()=> {
        document.body.classList.remove('open-vid')
        document.body.classList.remove('open-img')
        document.querySelector('.video-container iframe').src = ""
    })
})