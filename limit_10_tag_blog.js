const listButton = document.querySelectorAll("#myBar .number");
const myBar = document.querySelector("#myBar");
const widthItem = 100 / (listButton.length + 1);
myBar.style.width = `${widthItem}%`;
listButton.forEach((ele, i) => {
  listButton[i].style.left = `calc(${widthItem * (i + 1)}% - 30px)`;
});
let percent_prev = widthItem;
console.log(percent_prev);

function move(e) {
  e.preventDefault();

  var elem = document.getElementById("myBar");
  let width = percent_prev;

  // lấy index của listButton
  const rows = Array.from(listButton);
  let index = rows.indexOf(e.currentTarget);
  // active xanh khi click
  listButton[index].classList.add("active");
  listButton.forEach((ele, i) => {
    ele.classList.remove("active_arrow");
  });
  listButton[index].classList.add("active_arrow");

  let id = setInterval(frame, 1);
  function frame() {
    if (index * widthItem < percent_prev) {
      listButton.forEach((ele, i) => {
        i > index ? listButton[i].classList.remove("active") : null;
      });

      if (width < widthItem * (index + 1)) {
        clearInterval(id);
      } else {
        width -= 1;
        elem.style.width = width + "%";
      }
    }

    if (index * widthItem >= percent_prev) {
      listButton.forEach((ele, i) => {
        i < index ? listButton[i].classList.add("active") : null;
      });
      if (width > (index + 1) * widthItem) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  setTimeout(() => {
    percent_prev = (index + 1) * widthItem;
  }, 300);
}
