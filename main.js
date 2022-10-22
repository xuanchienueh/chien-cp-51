const scrollContainer = document.querySelector("div.container");
const chieucao = scrollContainer.offsetHeight;
console.log(scrollContainer.offsetTop);
console.log("chieucao", chieucao);
const elementScroll = document.querySelectorAll(".container section");
var maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
console.log("maxScrollLeft", maxScrollLeft);
// let checkToView = scrollContainer.getBoundingClientRect().top;
// console.log(checkToView);

let x = 0;
let isWheel = true;

function onWheel(evt) {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.scrollIntoView();

  x += evt.deltaY;

  console.log(scrollContainer.scrollLeft);
  // console.log(x);
  if (Math.floor(scrollContainer.scrollLeft) == maxScrollLeft || x <= 0) {
    pauseWheel();
  }
}
// isWheel && scrollContainer.addEventListener("wheel", onWheel, { smooth: true });
window.onscroll = () => {
  const html = document.documentElement;
  // console.log(html.scrollTop);
  // if (
  //   html.scrollTop >= scrollContainer.offsetTop + chieucao ||
  //   html.scrollTop < scrollContainer.offsetTop
  // ) {
  //   scrollContainer.addEventListener("wheel", onWheel, { smooth: true });
  // }
  if (
    html.scrollTop > scrollContainer.offsetTop - 400 &&
    html.scrollTop < scrollContainer.offsetTop + chieucao
  ) {
    scrollContainer.addEventListener("wheel", onWheel, { smooth: true });
  }
};

function pauseWheel() {
  scrollContainer.removeEventListener("wheel", onWheel);
  isWheel = false;
  console.log("pauseWheel run");
}
