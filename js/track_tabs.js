const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let number_index = 0;
const tabs = $$("#outcomes_study .track_tabs .tab-item");
const panes = $$("#outcomes_study .track_tabs .tab-pane");

const arrow_left = $('#outcomes_study .track_tabs .arrow_left')
const arrow_right = $('#outcomes_study .track_tabs .arrow_right')

// if(number_index < tabs.length -1) {
//   arrow_left.classList.remove('active');
//   arrow_right.classList.add('active');
// }

// if (number_index >0 && number_index <= tabs.length -2) { 
//   arrow_left.classList.add('active');
//   arrow_right.classList.add('active');
// } else if(number_index === tabs.length -2){ 
//   arrow_right.classList.remove('active');

// }
// if(number_index === tabs.length ){ 
//   arrow_left.classList.add('active');
//   arrow_right.classList.remove('active');
// }



const tabActive = $("#outcomes_study .track_tabs .tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    pane.classList.add("active");
    number_index = index;
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
  if(number_index === 0 ){ 
    arrow_left.classList.remove("active");
  } 
  if(number_index > 0 && number_index < tabs.length -1) { 
    arrow_right.classList.add("active");
    arrow_left.classList.add("active");
  }
}

arrow_right.onclick = function () {
  number_index = number_index + 1;
  if (number_index > tabs.length -1) { number_index = tabs.length -1}
  if (number_index < tabs.length) { 
    $("#outcomes_study .track_tabs .tab-item.active").classList.remove("active");
    $("#outcomes_study .track_tabs .tab-pane.active").classList.remove("active");
    tabs[number_index].classList.add("active");
    panes[number_index].classList.add("active");
  }
  if (number_index === tabs.length -1){ 
    arrow_right.classList.remove("active");
  }
  if(number_index > 0 && number_index < tabs.length -1) { 
    arrow_right.classList.add("active");
    arrow_left.classList.add("active");
  }
}
