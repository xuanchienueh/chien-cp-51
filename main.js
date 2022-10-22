const scrollContainer = document.querySelector("div.container");
const elementScroll = document.querySelectorAll('.container section')
var maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
console.log('maxScrollLeft', maxScrollLeft)

let x = 0
let isWheel = true

function onWheel(evt) {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  // console.log(evt)
  x += evt.deltaY

  // console.log(scrollContainer.scrollLeft);
  console.log(x)
  if (x > maxScrollLeft || x === 0) {
    pauseWheel()
  }
}
scrollContainer.onmouseover = () => {
  isWheel = true
  console.log(243)
}
isWheel && scrollContainer.addEventListener("wheel", onWheel, { smooth: true });






function pauseWheel() {
  scrollContainer.removeEventListener('wheel', onWheel)
  isWheel = false
}
