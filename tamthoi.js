const scrollContainer1 = document.querySelector("div.testScrollHorizonetal");
var maxScrollLeft1 = scrollContainer1.scrollWidth - scrollContainer1.clientWidth;
console.log('scrollContainer.offsetTop', scrollContainer.offsetTop);
console.log(123)


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
    // console.log(window.scrollY)
    let indexView = scrollContainer1.getBoundingClientRect().top
    console.log('indexView', Math.floor(indexView))
    // if (indexView >= 60) {
    //     isIntoview && addEventListenerScrollHorizontal()
    // }
    if (indexView <= 300 && indexView >= -100) {
        scrollContainer1.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // scrollContainer1 && scrollContainer1.forEach((item) => {
        //     item.scrollIntoView()
        // })
        addEventListenerScrollHorizontal()
        console.log('add scroll intoview')
    } else {
        removeEventListenerScrollHorizontal()
        HTMLElement.prototype.scrollIntoView = function () { }

    }

}



function addEventListenerScrollHorizontal() {
    isIntoview = true
    scrollContainer1.addEventListener("wheel", onWheel)
}

function removeEventListenerScrollHorizontal() {
    isIntoview = false
    scrollContainer1.removeEventListener("wheel", onWheel)


}