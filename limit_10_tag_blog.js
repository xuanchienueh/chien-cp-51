const listButton = document.querySelectorAll("#myBar .number");
const listContent = document.querySelectorAll(".content .item");
const boxContent = document.querySelector(".main .content");
const myBar = document.querySelector("#myBar");
const widthItem = 100 / (listButton.length + 1);
let indexActive = 0;
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
  indexActive = index;
  // active xanh khi click
  listButton[index].classList.add("active");

  listButton.forEach((ele, i) => {
    ele.classList.remove("active_arrow");
    listContent[i].classList.remove("active");
  });
  listButton[index].classList.add("active_arrow");
  listContent[index].classList.add("active");

  let id = setInterval(frame, 5);
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

let timerInterval = setInterval(() => {
  if (indexActive >= listButton.length - 1) {
    indexActive = 0;
  } else {
    indexActive++;
  }
  listButton[indexActive].click();
}, 5000);

boxContent.onmouseover = () => {
  clearInterval(timerInterval);
};
boxContent.onmouseout = () => {
  timerInterval = setInterval(() => {
    if (indexActive >= listButton.length - 1) {
      indexActive = 0;
    } else {
      indexActive++;
    }
    listButton[indexActive].click();
  }, 5000);
};
