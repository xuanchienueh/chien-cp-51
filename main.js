
const scrollContainer = document.querySelector("div.scrollSamsung");
const chieucao12 = scrollContainer.offsetHeight;
// console.log(scrollContainer.offsetTop);
// console.log("chieucao12", chieucao12);
const elementScroll = document.querySelectorAll(".scrollSamsung section");
var maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
// console.log("maxScrollLeft", maxScrollLeft);
// let checkToView = scrollContainer.getBoundingClientRect().top;
// console.log(checkToView);
const html_1 = document.documentElement;


let x = 0;
let isWheel = true;

function onWheel(evt) {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  // scrollContainer.scrollIntoView();

  x += evt.deltaY;
  console.log(scrollContainer.scrollLeft)
  console.log(maxScrollLeft)

  // console.log(scrollContainer.scrollLeft);
  if (Math.floor(scrollContainer.scrollLeft) == maxScrollLeft) {
    pauseWheel();
  }
  if (x <= 0) pauseWheel()
}
isWheel && scrollContainer.addEventListener("wheel", onWheel);


function pauseWheel() {
  scrollContainer.removeEventListener("wheel", onWheel);
  // isWheel = false;
  // console.log("pauseWheel run");
}


/* let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;


  if (st > lastScrollTop && html_1.scrollTop < scrollContainer.offsetTop) {
    scrollContainer.addEventListener("wheel", onWheel);
  }
  if (st < lastScrollTop && html_1.scrollTop > scrollContainer.offsetTop + chieucao12) {
    scrollContainer.addEventListener("wheel", onWheel);
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false); */