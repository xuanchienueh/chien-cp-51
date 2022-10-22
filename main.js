const scrollContainer = document.querySelector("div.container");
console.log(scrollContainer.scrollWidth);
let numberScroll = 0;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  //   console.log(scrollContainer.wheelDeltaX);
  //   console.log(scrollContainer.scrollLeft);
  //   console.log(evt.scrollX);
  console.log(evt.layerX);
});
// window.addEventListener("scroll", function (event) {
//   var scroll_y = this.scrollY;
//   var scroll_x = this.scrollX;
//   console.log(scroll_x, scroll_y);
// });
