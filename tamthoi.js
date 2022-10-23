const scrollContainer1 = document.querySelector("div.testScrollHorizonetal");
const eluida0b6adb5 = document.querySelector('#eluida0b6adb5')
var maxScrollLeft1 = scrollContainer1.scrollWidth - scrollContainer1.clientWidth;
console.log('eluida0b6adb5.offsetTop', eluida0b6adb5.offsetTop);
console.log('eluida0b6adb5.offsetHeight', eluida0b6adb5.offsetHeight);


let isIntoview = true
function onWheel(evt) {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    // console.log(scrollContainer1.scrollLeft)
    // scrollContainer1.scrollIntoView(true)

    if (scrollContainer1.scrollLeft <= 0) {
        HTMLElement.prototype.scrollIntoView = function () { }
        removeEventListenerScrollHorizontal()


    }
    if (Math.floor(scrollContainer1.scrollLeft) == maxScrollLeft1) {
        removeEventListenerScrollHorizontal()

        HTMLElement.prototype.scrollIntoView = function () { }

    }
}


scrollContainer1.addEventListener("wheel", onWheel)
window.onscroll = () => {
    console.log('scrollY', window.scrollY)
    let indexView = eluida0b6adb5.getBoundingClientRect().top
    // console.log('indexView', Math.floor(indexView))

    if (window.scrollY <= eluida0b6adb5.offsetTop + eluida0b6adb5.offsetHeight + 100
        && window.scrollY >= eluida0b6adb5.offsetTop - 100) {
        scrollContainer1.scrollIntoView({ behavior: 'smooth', block: 'start' })
        addEventListenerScrollHorizontal()
        console.log('add scroll intoview')
    } else {
        removeEventListenerScrollHorizontal()
        HTMLElement.prototype.scrollIntoView = function () { }
    }
    /*  if (indexView <= 300 && indexView >= -100) {
         eluida0b6adb5.scrollIntoView({ behavior: 'smooth', block: 'start' })
         addEventListenerScrollHorizontal()
         console.log('add scroll intoview')
     } else {
         removeEventListenerScrollHorizontal()
         HTMLElement.prototype.scrollIntoView = function () { }
     } */

}



function addEventListenerScrollHorizontal() {
    isIntoview = true
    scrollContainer1.addEventListener("wheel", onWheel)
}

function removeEventListenerScrollHorizontal() {
    isIntoview = false
    scrollContainer1.removeEventListener("wheel", onWheel)
}


