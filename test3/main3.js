const scrollContainer2 = document.querySelector(".vieclam_scrollHorizontal .scrollHorizonetal");
const eluidb417d3e0 = document.querySelector('#eluidb417d3e0') // eluidb417d3e0 là id của section wp
var maxScrollLeft2 = scrollContainer2 && scrollContainer2.scrollWidth - scrollContainer2.clientWidth
let phiatren1 = eluidb417d3e0.offsetTop
let phiaduoi1 = eluidb417d3e0.offsetTop + eluidb417d3e0.offsetHeight



function onWheel1(evt) {
    evt.preventDefault();
    scrollContainer2.scrollLeft += evt.deltaY;
    // console.log('scrollContainer2.scrollLeft', scrollContainer2.scrollLeft)
    scrollContainer2.scrollIntoView(true)
    window.scrollTo(0, window.scrollY - 60)

    if (scrollContainer2.scrollLeft <= 0) {
        window.scrollTo(0, phiatren1 - 250)
        removeEventListenerScrollHorizontal1()
    }
    // console.log('scrollLeft final', Math.round(scrollContainer2.scrollLeft))
    // console.log('maxScrollLeft2', maxScrollLeft2)
    if (screen.width > 992 && scrollContainer2 && Math.round(scrollContainer2.scrollLeft) == maxScrollLeft2) {
        window.scrollTo(0, phiaduoi1 + 500)
        removeEventListenerScrollHorizontal1()
        console.log('> 99xpx')
    }
    if (scrollContainer2 && Math.round(scrollContainer2.scrollLeft) >= maxScrollLeft2) {
        // HTMLElement.prototype.scrollIntoView = function () { }
        window.scrollTo(0, phiaduoi1 + 90)
        removeEventListenerScrollHorizontal1()
        // console.log(' right final')
    }
}
if (screen.width > 767) {
    scrollContainer2 && scrollContainer2.addEventListener("wheel", onWheel1)
    window.addEventListener('scroll', onWindowScroll1)

    /* window.onscroll = () => {
        console.log('scrollY', window.scrollY)

        if (window.scrollY <= phiaduoi1 - 100 && window.scrollY >= phiatren1 - 100) {
            scrollContainer2.scrollIntoView(true)
            addEventListenerScrollHorizontal1()
            console.log('add scroll intoview')
        } else {
            removeEventListenerScrollHorizontal1()
        }
    } */
}




function addEventListenerScrollHorizontal1() {
    scrollContainer2.addEventListener("wheel", onWheel1)
    window.removeEventListener('scroll', onWindowScroll1)
}

function removeEventListenerScrollHorizontal1() {
    scrollContainer2.removeEventListener("wheel", onWheel1)
    window.addEventListener('scroll', onWindowScroll1)
}
function onWindowScroll1() {
    // console.log('scrollY', window.scrollY)
    console.log('checkView', scrollContainer2.getBoundingClientRect().top)
    let indexView = scrollContainer2.getBoundingClientRect().top

    if (indexView <= 130 && indexView >= -(scrollContainer2.offsetHeight)) {
        // scrollContainer2.scrollIntoView(true)
        // window.scrollTo(0, window.scrollY - 200)
        addEventListenerScrollHorizontal1()
        console.log('add scroll intoview')

    } else {
        removeEventListenerScrollHorizontal1()
    }
    /*  if (window.scrollY <= phiaduoi1 - 100 && window.scrollY >= phiatren1 - 100) {
         scrollContainer2.scrollIntoView(true)
         addEventListenerScrollHorizontal1()
         console.log('add scroll intoview')
 
     } else {
         removeEventListenerScrollHorizontal1()
     } */
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


function debounce(func, wait = 100) {
    let timeout;

    return function () {
        let context = this,
            args = arguments;

        let executeFunction = function () {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
}

/* function _scrollTo(selector, yOffset = 0) {
    let y = selector.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
} */