const itemPercents = document.querySelectorAll('#statistical .container .bg')
const c1 = document.querySelector("#statistical #c1");
const t1 = document.querySelector("#statistical #t1");
const c2 = document.querySelector("#statistical #c2");
const t2 = document.querySelector("#statistical #t2");
const c3 = document.querySelector("#statistical #c3");
const t3 = document.querySelector("#statistical #t3");
const c4 = document.querySelector("#statistical #c4");
const t4 = document.querySelector("#statistical #t4");

const number_percent1 = document.querySelector("#statistical .container .number_percent1");
const number_percent2 = document.querySelector("#statistical .container .number_percent2");
const number_percent3 = document.querySelector("#statistical .container .number_percent3");
const number_percent4 = document.querySelector("#statistical .container .number_percent4");
const itemPercents0 = Math.floor(getOffset(itemPercents[0]));
const itemPercents2 = Math.floor(getOffset(itemPercents[2]));

let valuePercent1 = 67
let valuePercent2 = 77
let valuePercent3 = 87
let valuePercent4 = 97
let percent_start = 0;
const html = document.documentElement;


let itemPercent_height = itemPercents && itemPercents[0] && itemPercents[0].clientHeight
function onScroll() {
  onScrollRow1()
  onScrollRow2()
}
function onScrollRow1() {
  animateNumber(valuePercent1, 1000, 0, c1, number_percent1);
  animateNumber(valuePercent2, 1000, 0, c2, number_percent2);
}
function onScrollRow2() {
  animateNumber(valuePercent3, 1000, 0, c3, number_percent3);
  animateNumber(valuePercent4, 1000, 0, c4, number_percent4);
}

var processChange1 = debounce(() => onScrollRow1());
var processChange2 = debounce(() => onScrollRow2());
var processChange = debounce(() => onScroll());

window.onload = () => {
  onScroll()
  let timeOutId = setTimeout(() => {
    window.addEventListener("scroll", () => {
      let distance = html.scrollTop

      if (window.innerWidth > 992) {
        if (distance > itemPercents0 - itemPercent_height - 200 && distance < itemPercents0 - 200) processChange1()
        if (distance > itemPercents2 - itemPercent_height - 200 && distance < itemPercents2) processChange2()
      }

      if (window.innerWidth <= 992 && window.innerWidth > 767) {
        if (distance > itemPercents0 - 300 && distance < itemPercents0 - 200) processChange1()
        if (distance > itemPercents2 - 300 && distance < itemPercents2 + 100) processChange2()

      }

      if (window.screenTop <= 767) {
        if (distance > itemPercents0 - 300 && distance < itemPercents0) processChange1()
        if (distance > itemPercents2 - 300 && distance < itemPercents2 + 100) processChange2()
      }
    });
  }, 2000)
}

function animateNumber(
  finalNumber,
  duration = 1000,
  startNumber = 0,
  elementCircle,
  eleNumberPercent
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
      const percent = (currentNumber) => {
        elementCircle ? elementCircle.style.strokeDasharray = `${currentNumber} 100` : null;
        eleNumberPercent ? eleNumberPercent.innerHTML = currentNumber + "%" : null;
      }
      percent(currentNumber)
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