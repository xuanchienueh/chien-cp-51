const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let number_index = 0;
const tabs = $$("#outcomes_study .track_tabs .tab-item");
const panes = $$("#outcomes_study .track_tabs .tab-pane");

const arrow_left = $('#outcomes_study .track_tabs .arrow_left')
const arrow_right = $('#outcomes_study .track_tabs .arrow_right')
const tabActive = $("#outcomes_study .track_tabs .tab-item.active");
const tab_content = $("#outcomes_study .track_tabs .tab-content")


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    pane.classList.add("active");
    number_index = index;
    console.log(number_index)
  };
});

arrow_left.onclick = function () {
  number_index = number_index - 1;
  if (number_index < 0) { number_index = 0; }
  if (number_index >= 0) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");
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
  console.log('arrow left',number_index)

}

arrow_right.onclick = function () {
  number_index = number_index + 1;
  if (number_index >= tabs.length - 1) { number_index = tabs.length - 1 }
  if (number_index < tabs.length) {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");
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
  console.log('arrow_right', number_index)

}

function myTimer() {
  arrow_right.click()
  if (number_index === tabs.length - 1) {
    const a = setTimeout(() => {
      arrow_left.click()
      arrow_left.click()
      arrow_left.click()
     },2000)
    
  }
}

function myTimer2() {
  
}
let myVar = setInterval(myTimer, 2000);
let myVar2 = setInterval(myTimer2, 12000)



// tab_content.onmouseover = () => {
//   console.log(24)
//   clearInterval(myVar)
//   clearInterval(myVar2)
// }

tab_content.onmouseout = () => {
  console.log(54)
  // let a = setInterval(() => { 
  //   arrow_right.click()
  // }, 6000)
  // let a2 = setInterval(() => {
  //   if (number_index === tabs.length - 1) {
  //     arrow_left.click()
  //     arrow_left.click()
  //     arrow_left.click()
  //   }
  //  }, 12000)
 
}