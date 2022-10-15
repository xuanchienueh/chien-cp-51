const itemPercents = document.querySelectorAll('#statistical .container .bg')
const c1 = document.querySelector("#statistical #c1");
const t1 = document.querySelector("#statistical #t1");
const c2 = document.querySelector("#statistical #c2");
const t2 = document.querySelector("#statistical #t2");
const c3 = document.querySelector("#statistical #c3");
const t3 = document.querySelector("#statistical #t3");
const c4 = document.querySelector("#statistical #c4");
const t4 = document.querySelector("#statistical #t4");
const c5 = document.querySelector("#statistical #c5");
const t5 = document.querySelector("#statistical #t5");
const c6 = document.querySelector("#statistical #c6");
const t6 = document.querySelector("#statistical #t6");
const number_percent1 = document.querySelector("#statistical .container .number_percent1");
const number_percent2 = document.querySelector("#statistical .container .number_percent2");
const number_percent3 = document.querySelector("#statistical .container .number_percent3");
const number_percent4 = document.querySelector("#statistical .container .number_percent4");
const number_percent5 = document.querySelector("#statistical .container .number_percent5");
const number_percent6 = document.querySelector("#statistical .container .number_percent6");
const itemPercents0 = Math.floor(getOffset(itemPercents[0]));
const itemPercents2 = Math.floor(getOffset(itemPercents[2]));
const itemPercents4 = Math.floor(getOffset(itemPercents[4]));

let valuePercent1 = 67
let valuePercent2 = 77
let valuePercent3 = 87
let valuePercent4 = 97
let valuePercent5 = 71
let valuePercent6 = 90
let percent_start = 0;
const html = document.documentElement;


let itemPercent_height = itemPercents && itemPercents[0] && itemPercents[0].clientHeight


window.onload = () => {
  onScroll()
  let timeOutId = setTimeout(() => {
    window.addEventListener("scroll", () => {

      if (window.innerWidth > 992) {
        if (html.scrollTop > itemPercents0 - itemPercent_height - 200 && html.scrollTop < itemPercents0 - 200) {
          processChange1()
        }
        if (html.scrollTop > itemPercents2 - itemPercent_height - 200 && html.scrollTop < itemPercents2) {
          processChange2()
        }
        if (html.scrollTop > itemPercents4 - itemPercent_height - 200 && html.scrollTop < itemPercents4) {
          processChange3()
        }
      }

      if (window.innerWidth <= 992 && window.innerWidth > 767) {
        if (html.scrollTop > itemPercents0 - 300 && html.scrollTop < itemPercents0 - 200) {
          processChange1()
        }


        if (html.scrollTop > itemPercents2 - 300 && html.scrollTop < itemPercents2 + 100) {
          processChange2()
        }
        if (html.scrollTop > itemPercents4 - itemPercent_height - 200 && html.scrollTop < itemPercents4) {
          processChange3()
        }
      }

      if (window.screenTop <= 767) {
        if (html.scrollTop > itemPercents0 - 300 && html.scrollTop < itemPercents0) {
          processChange1()
        }
        if (html.scrollTop > itemPercents2 - 300 && html.scrollTop < itemPercents2 + 100) {
          processChange2()
        }
        if (html.scrollTop > itemPercents4 - itemPercent_height - 200 && html.scrollTop < itemPercents4) {
          processChange3()
        }
      }
    });
  }, 2000)
}


function onScroll() {
  onScroll1()
  onScroll2()
  onScroll3()

}
function onScroll1() {
  animateNumber(valuePercent1, 1000, 0, percent1);
  animateNumber(valuePercent2, 1000, 0, percent2);
}
function onScroll2() {
  animateNumber(valuePercent3, 1000, 0, percent3);
  animateNumber(valuePercent4, 1000, 0, percent4);
}
function onScroll3() {
  animateNumber(valuePercent5, 1000, 0, percent5);
  animateNumber(valuePercent6, 1000, 0, percent6);
}

var processChange1 = debounce(() => onScroll1());
var processChange2 = debounce(() => onScroll2());
var processChange3 = debounce(() => onScroll3());
var processChange = debounce(() => onScroll());

function percent(element, numberPercent, eleNumberPercent) {
  element ? element.style.strokeDasharray = `${numberPercent} 100` : null;
  eleNumberPercent ? eleNumberPercent.innerHTML = numberPercent + "%" : null
}




function percent1(number) {
  c1 ? c1.style.strokeDasharray = `${number} 100` : null;
  number_percent1 ? number_percent1.innerHTML = number + "%" : null;
}
function percent2(number) {
  c2 ? c2.style.strokeDasharray = `${number} 100` : null;
  number_percent2 ? number_percent2.innerHTML = number + "%" : null
}
function percent3(number) {
  c3 ? c3.style.strokeDasharray = `${number} 100` : null;
  number_percent3 ? number_percent3.innerHTML = number + "%" : null
}
function percent4(number) {
  c4 ? c4.style.strokeDasharray = `${number} 100` : null;
  number_percent4 ? number_percent4.innerHTML = number + "%" : null
}
function percent5(number) {
  c5 ? c5.style.strokeDasharray = `${number} 100` : null;
  number_percent5 ? number_percent5.innerHTML = number + "%" : null
}
function percent6(number) {
  c6 ? c6.style.strokeDasharray = `${number} 100` : null;
  number_percent6 ? number_percent6.innerHTML = number + "%" : null
}




function animateNumber(
  finalNumber,
  duration = 1000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, 17);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
      window.addEventListener("scroll", processChange);
    } else {
      window.removeEventListener("scroll", processChange);
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }
}

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function getOffset(el) {
  if (el !== undefined) {
    const rect = el.getBoundingClientRect();

    return rect.top + window.scrollY
  }
}