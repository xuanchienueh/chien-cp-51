
const scrollContainer2 = document.querySelector(".vieclam_scrollHorizontal .scrollHorizonetal");
const scrollHorizontal_vieclam = document.querySelector('.scrollHorizontal_vieclam')// scrollHorizontal_vieclam l� class c&#7911;a wp
var maxScrollLeft2 = scrollContainer2 && scrollContainer2.scrollWidth - scrollContainer2.clientWidth
let phiatren1 = scrollHorizontal_vieclam && scrollHorizontal_vieclam.offsetTop
let phiaduoi1 = scrollHorizontal_vieclam && scrollHorizontal_vieclam.offsetTop + scrollHorizontal_vieclam.offsetHeight
let body1 = document.querySelector('body')


function onWheel1(evt) {
    evt.preventDefault();

    if (scrollContainer2) {
        scrollContainer2.scrollLeft += evt.deltaY;
        scrollContainer2.scrollIntoView(true)
    }
    window.scrollTo(0, window.scrollY - 120)
    // console.log('scrollContainer2.scrollLeft', scrollContainer2.scrollLeft)


    if (scrollContainer2 && scrollContainer2.scrollLeft <= 0) {
        window.scrollTo(0, phiatren1 - 250)
        removeEventListenerScrollHorizontal1()
    }
    // console.log('scrollLeft final', Math.round(scrollContainer2.scrollLeft))
    // console.log('maxScrollLeft2', maxScrollLeft2)

    if (scrollContainer2 && Math.round(scrollContainer2.scrollLeft) + 2 >= maxScrollLeft2) {
        // body1.style.overflowY = 'hidden'
        // body1.style.height = '100%'

        if (screen.width >= 992) {
            removeEventListenerScrollHorizontal1()
            window.scroll({ left: 0, top: window.scrollY + scrollContainer2.offsetHeight + 100, behavior: 'smooth' })
            console.log('scroll xong roi')
            // runScrollBody()

        } else {
            window.scroll({ left: 0, top: window.scrollY + scrollContainer2.offsetHeight + 100, behavior: 'smooth' })

            removeEventListenerScrollHorizontal1()
            // runScrollBody()

        }

    }
}
if (scrollContainer2 && screen.width > 767) {
    scrollContainer2 && scrollContainer2.addEventListener("wheel", onWheel1)
    window.addEventListener('scroll', onWindowScroll1)
}

function addEventListenerScrollHorizontal1() {
    scrollContainer2 && scrollContainer2.addEventListener("wheel", onWheel1)
    window.removeEventListener('scroll', onWindowScroll1)
}

function removeEventListenerScrollHorizontal1() {
    scrollContainer2 && scrollContainer2.removeEventListener("wheel", onWheel1)
    window.addEventListener('scroll', onWindowScroll1)
}
function onWindowScroll1() {
    // console.log('checkView', Math.round(scrollContainer2.getBoundingClientRect().top))
    // console.log('scrollY', Math.round(window.scrollY))
    let indexView = scrollContainer2 && scrollContainer2.getBoundingClientRect().top
    console.log(window.scrollY)

    if (scrollContainer2 && indexView <= 130 && indexView >= -(scrollContainer2.offsetHeight)) {

        // pauseScrollBody()
        addEventListenerScrollHorizontal1()
        // setTimeout(() => { runScrollBody() }, 500)


    } else {
        removeEventListenerScrollHorizontal1()

    }

}

if (screen.width <= 767) {
    jQuery(document).ready(function ($) {
        $(".scrollHorizonetal").slick({
            infinite: false,
            slidesToShow: 1,
            // slidesToScroll: 1,
            centerMode: true,
            centerPadding: '16px',
            arrows: true,
            prevArrow:
                "<button type='button' class='roadmap-prev slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:
                "<button type='button' class='roadmap-next slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        });
    });
}


function pauseScrollBody() {
    // body1.style.overflowY = 'hidden'
    // body1.style.height = '100%'
    body1.classList.add('disable-scroll')
    console.log('scroll body pause')
    return 1
}
function runScrollBody() {
    body1.classList.remove('disable-scroll')
    console.log('scroll body kich hoat')
}

