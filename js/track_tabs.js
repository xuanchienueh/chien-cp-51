const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let number_index = 0;
const tabs = $$("#outcomes_study .track_tabs .tab-item");
const panes = $$("#outcomes_study .track_tabs .tab-pane");

const arrow_left = $("#outcomes_study .track_tabs .arrow_left");
const arrow_right = $("#outcomes_study .track_tabs .arrow_right");
const tabActive = $("#outcomes_study .track_tabs .tab-item.active");
const tab_content = $("#outcomes_study .track_tabs .tab-content");
tabs[0].onclick = () => {
  $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
  $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");

  tabs[0].classList.add("active");
  panes[0].classList.add("active");
  number_index = 0;
  console.log(number_index);
};

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    number_index = index;
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );

    tab.classList.add("active");
    pane.classList.add("active");
    console.log("tab.onclick", number_index);
  };

  /* xử lý phần hover */
  tab.onmouseover = function () {
    console.log("onmouseover");
    clearInterval(myVar);
  };
});

arrow_left.onclick = function () {
  number_index = number_index - 1;
  if (number_index < 0) {
    number_index = 0;
  }
  if (number_index >= 0) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );
    tabs[number_index].classList.add("active");
    panes[number_index].classList.add("active");
  }
  if (number_index === 0) {
    arrow_left.classList.remove("active");
  }
  if (number_index > 0 && number_index < tabs.length - 1) {
    arrow_right.classList.add("active");
    arrow_left.classList.add("active");
  }
  console.log("arrow left", number_index);
};

arrow_right.onclick = function () {
  number_index++;
  if (number_index >= tabs.length - 1) {
    number_index = tabs.length - 1;
  }
  if (number_index < tabs.length) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove(
      "active"
    );
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove(
      "active"
    );
    tabs[number_index].classList.add("active");
    panes[number_index].classList.add("active");
  }
  if (number_index === tabs.length - 1) {
    arrow_right.classList.remove("active");
  }
  if (number_index > 0 && number_index < tabs.length - 1) {
    arrow_right.classList.add("active");
    arrow_left.classList.add("active");
  }
  console.log("arrow_right", number_index);
};

function myTimer() {
  arrow_right.click();
  if (number_index === tabs.length - 1) {
    number_index = 0;
    const a = setTimeout(() => {
      tabs[0].click();
    }, 5000);
  }
}
let myVar = setInterval(myTimer, 5000);

const content_hover = $(
  "#outcomes_study .track_tabs .tab-content .bg-tab-content"
);
content_hover.onmouseout = () => {
  console.log("onmouseout");
};
content_hover.onmouseover = () => {
  console.log("onmouseover");
  clearInterval(myVar);
};
