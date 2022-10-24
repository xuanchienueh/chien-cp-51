const scrollContainer1 = document.querySelector("div.testScrollHorizonetal");
const eluida0b6adb5 = document.querySelector('#eluida0b6adb5')
var maxScrollLeft1 = scrollContainer1 && scrollContainer1.scrollWidth - scrollContainer1.clientWidth
let phiatren = eluida0b6adb5.offsetTop
let phiaduoi = eluida0b6adb5.offsetTop + eluida0b6adb5.offsetHeight
// console.log('phaitren', phiatren)
// console.log('phiaduoi', phiaduoi)


function onWheel(evt) {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    // console.log('scrollContainer1.scrollLeft', scrollContainer1.scrollLeft)

    if (scrollContainer1.scrollLeft <= 0) {
        window.scrollTo(0, phiatren - 350)
        removeEventListenerScrollHorizontal()
    }
    // console.log('scrollLeft final', Math.round(scrollContainer1.scrollLeft))
    // console.log('maxScrollLeft1', maxScrollLeft1)
    if (screen.width > 992 && scrollContainer1 && Math.round(scrollContainer1.scrollLeft) == maxScrollLeft1) {
        window.scrollTo(0, phiaduoi - 90)
        removeEventListenerScrollHorizontal()
        console.log('> 99xpx')
    }
    if (scrollContainer1 && Math.round(scrollContainer1.scrollLeft) == maxScrollLeft1) {
        // HTMLElement.prototype.scrollIntoView = function () { }
        window.scrollTo(0, phiaduoi)
        removeEventListenerScrollHorizontal()
        // console.log(' right final')
    }
}

if (screen.width > 760) {
    scrollContainer1 && scrollContainer1.addEventListener("wheel", onWheel)
    window.onscroll = () => {
        // console.log('scrollY', window.scrollY)

        if (window.scrollY <= phiaduoi - 100 && window.scrollY >= phiatren - 100) {
            scrollContainer1.scrollIntoView(true)
            scrollContainer1.getElementsByClassName.paddingBottom = '50px'
            addEventListenerScrollHorizontal()
            console.log('add scroll intoview')
        } else {
            removeEventListenerScrollHorizontal()
        }
    }
}




function addEventListenerScrollHorizontal() {
    scrollContainer1.addEventListener("wheel", onWheel)
}

function removeEventListenerScrollHorizontal() {
    scrollContainer1.removeEventListener("wheel", onWheel)
}

if (screen.width <= 767) {
    jQuery(document).ready(function ($) {
        $(".testScrollHorizonetal").slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
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



// $(".testScrollHorizonetal").slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '40px',
//     arrows: true,
//     prevArrow:
//         "<button type='button' class='roadmap-prev slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//         "<button type='button' class='roadmap-next slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
// });