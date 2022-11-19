const listTabTitle = document.querySelectorAll(
  ".get_hire .tabTitle .titleItem"
);
const listTabTitleActive = document.querySelectorAll(
  ".get_hire .tabTitle .itemContent"
);
const arrowAfter = document.querySelectorAll(".get_hire .tabTitle .arrowAfter");
const tabContents = document.querySelectorAll(
  ".get_hire .tabContent .contentItem"
);
if (listTabTitle !== null || listTabTitle !== undefined) {
  for (let i = 0; i < listTabTitle.length; i++) {
    listTabTitle[i].style.width = `${100 / listTabTitle.length}%`;
    document.querySelector(".get_hire .tabTitleLine span").style.width = `${
      100 / (listTabTitle.length * 2)
    }%`;
  }
}

// tạo nút bấm

const activeTabLearning = (e) => {
  e.preventDefault();

  //bóc ra để lấy index, vì listTabTitleActive là node nên phải Array.from
  rows = Array.from(listTabTitleActive);
  let indexEvent = rows.indexOf(e.currentTarget);
  // Tính toán width
  const widthPlus =
    100 / (listTabTitle.length * 2) + (100 / listTabTitle.length) * indexEvent;

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  tabContents[indexEvent].classList.add("active");

  for (let i = 0; i <= indexEvent; i++) {
    listTabTitleActive[i].classList.add("active");
    document.querySelector(".get_hire .tabTitleLine span").style.width = `${
      widthPlus + 1
    }% `;
  }

  //remove active các thẻ lớn hơn index
  for (let i = indexEvent + 1; i < listTabTitle.length; i++) {
    listTabTitleActive[i].classList.remove("active");
  }

  for (let z = 0; z < arrowAfter.length; z++) {
    arrowAfter[z].classList.remove("activeArrow");
  }

  arrowAfter[indexEvent].classList.add("activeArrow");
};
