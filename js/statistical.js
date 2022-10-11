let c1 = document.getElementById("c1");
let t1 = document.getElementById("t1");
let c2 = document.getElementById("c2");
let t2 = document.getElementById("t2");
let c3 = document.getElementById("c3");
let t3 = document.getElementById("t3");
let c4 = document.getElementById("c4");
let t4 = document.getElementById("t4");
let percent_start = 0;
window.onload = () => {
  animateNumber(67, 1000, 0, percent1);
  animateNumber(77, 1000, 0, percent2);
  animateNumber(87, 1000, 0, percent3);
  animateNumber(97, 1000, 0, percent4);
};
function debounce(func, timeout = 700) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function onScroll1() {
  animateNumber(67, 1000, 0, percent1);
  animateNumber(77, 1000, 0, percent2);
  animateNumber(87, 1000, 0, percent3);
  animateNumber(97, 1000, 0, percent4);
}

const processChange = debounce(() => onScroll1());
window.addEventListener("scroll", () => {
  processChange();
});

function animateNumber(
  finalNumber,
  duration = 2000,
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

function percent1(number) {
  c1 ? c1.style.strokeDasharray = `${number} 100`: null;
  //   t1.textContent = `${number}%`;
  const number_percent1 = document.querySelector(".container .number_percent1");
 number_percent1 ? number_percent1.innerHTML = number + "%" : null;
}
function percent2(number) {
  c2 ? c2.style.strokeDasharray = `${number} 100` : null;
  const number_percent2 = document.querySelector(".container .number_percent2");
  number_percent2 ? number_percent2.innerHTML = number + "%" : null
  //   t2.textContent = `${number}%`;
}
function percent3(number) {
  c3 ? c3.style.strokeDasharray = `${number} 100` : null;
  const number_percent3 = document.querySelector(".container .number_percent3");
  number_percent3 ? number_percent3.innerHTML = number + "%" : null
  //   t3.textContent = `${number}%`;
}
function percent4(number) {
  c4 ? c4.style.strokeDasharray = `${number} 100` : null;
  const number_percent4 = document.querySelector(".container .number_percent4");
  number_percent4 ? number_percent4.innerHTML = number + "%" : null
  //   t4.textContent = `${number}%`;
}
