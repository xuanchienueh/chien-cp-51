window.onload = function () {
  spinner0(67);
  spinner1(89);
  spinner2(74);
  spinner3(77);
};
const class_spinners = document.querySelectorAll("#statistical .spinner");

class_spinners[0].onmouseover = function () {
  spinner0(67);
};
class_spinners[1].onmouseover = function () {
  spinner1(89);
};
class_spinners[2].onmouseover = function () {
  spinner2(74);
};
class_spinners[3].onmouseover = function () {
  spinner3(77);
};






/* -------------- */
function spinner0(percent) {
  let spinner = document.getElementById("spinner1");

  let ctx = spinner.getContext("2d");
  let width = spinner.width;
  let height = spinner.height;
  let degrees = 0;
  let new_degrees = 0;
  let difference = 0;
  let color = "blue";
  let bgcolor = "#ccc";
  let text;
  let animation_loop, redraw_loop;
  let gradient = ctx.createLinearGradient(0, 0, 70, 470);
  gradient.addColorStop("0", "#227df9");
  gradient.addColorStop("0.25", "#7462f9");
  gradient.addColorStop("0.5", "#df3ef8");
  gradient.addColorStop("1.0", "#227df9");

  function init() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 50;
    ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
    ctx.stroke();
    let radians = (degrees * Math.PI) / 180;

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 50;
    ctx.arc(
      width / 2,
      height / 2,
      100,
      0 - (90 * Math.PI) / 180,
      radians - (90 * Math.PI) / 180,
      false
    );
    ctx.stroke();
    ctx.fillStyle = gradient;;
    ctx.font = "40px arial";
    text = Math.floor((degrees / 360) * 100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
  }

  function draw(percent) {
    if (typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = Math.ceil(percent * 3.6);
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 300 / difference);
  }

  function animate_to() {
    if (degrees == new_degrees) clearInterval(animation_loop);
    else if (degrees < new_degrees) degrees++;
    else degrees--;
    init();
  }

  draw(percent);
}




/* -------------- */
function spinner1(percent) {
  let spinner = document.getElementById("spinner2");

  let ctx = spinner.getContext("2d");
  let width = spinner.width;
  let height = spinner.height;
  let degrees = 0;
  let new_degrees = 0;
  let difference = 0;
  let color = "blue";
  let bgcolor = "#ccc";
  let text;
  let animation_loop, redraw_loop;
  let gradient = ctx.createLinearGradient(0, 0, 70, 470);
  gradient.addColorStop("0", "#227df9");
  gradient.addColorStop("0.25", "#7462f9");
  gradient.addColorStop("0.5", "#df3ef8");
  gradient.addColorStop("1.0", "#227df9");

  function init() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 50;
    ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
    ctx.stroke();
    let radians = (degrees * Math.PI) / 180;

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 50;
    ctx.arc(
      width / 2,
      height / 2,
      100,
      0 - (90 * Math.PI) / 180,
      radians - (90 * Math.PI) / 180,
      false
    );
    ctx.stroke();
    ctx.fillStyle = gradient;;
    ctx.font = "40px arial";
    text = Math.floor((degrees / 360) * 100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
  }

  function draw(percent) {
    if (typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = Math.ceil(percent * 3.6);
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 300 / difference);
  }

  function animate_to() {
    if (degrees == new_degrees) clearInterval(animation_loop);
    else if (degrees < new_degrees) degrees++;
    else degrees--;
    init();
  }

  draw(percent);
}




/* -------------- */
function spinner2(percent) {
  let spinner = document.getElementById("spinner3");

  let ctx = spinner.getContext("2d");
  let width = spinner.width;
  let height = spinner.height;
  let degrees = 0;
  let new_degrees = 0;
  let difference = 0;
  let color = "blue";
  let bgcolor = "#ccc";
  let text;
  let animation_loop, redraw_loop;
  let gradient = ctx.createLinearGradient(0, 0, 70, 470);
  gradient.addColorStop("0", "#227df9");
  gradient.addColorStop("0.25", "#7462f9");
  gradient.addColorStop("0.5", "#df3ef8");
  gradient.addColorStop("1.0", "#227df9");

  function init() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 50;
    ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
    ctx.stroke();
    let radians = (degrees * Math.PI) / 180;

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 50;
    ctx.arc(
      width / 2,
      height / 2,
      100,
      0 - (90 * Math.PI) / 180,
      radians - (90 * Math.PI) / 180,
      false
    );
    ctx.stroke();
    ctx.fillStyle = gradient;;
    ctx.font = "40px arial";
    text = Math.floor((degrees / 360) * 100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
  }

  function draw(percent) {
    if (typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = Math.ceil(percent * 3.6);
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 300 / difference);
  }

  function animate_to() {
    if (degrees == new_degrees) clearInterval(animation_loop);
    else if (degrees < new_degrees) degrees++;
    else degrees--;
    init();
  }

  draw(percent);
}



/* -------------- */
function spinner3(percent) {
  let spinner = document.getElementById("spinner4");

  let ctx = spinner.getContext("2d");
  let width = spinner.width;
  let height = spinner.height;
  let degrees = 0;
  let new_degrees = 0;
  let difference = 0;
  let color = "blue";
  let bgcolor = "#ccc";
  let text;
  let animation_loop, redraw_loop;
  let gradient = ctx.createLinearGradient(0, 0, 70, 470);
  gradient.addColorStop("0", "#227df9");
  gradient.addColorStop("0.25", "#7462f9");
  gradient.addColorStop("0.5", "#df3ef8");
  gradient.addColorStop("1.0", "#227df9");

  function init() {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 50;
    ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
    ctx.stroke();
    let radians = (degrees * Math.PI) / 180;

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 50;
    ctx.arc(
      width / 2,
      height / 2,
      100,
      0 - (90 * Math.PI) / 180,
      radians - (90 * Math.PI) / 180,
      false
    );
    ctx.stroke();
    ctx.fillStyle = gradient;;
    ctx.font = "40px arial";
    text = Math.floor((degrees / 360) * 100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
  }

  function draw(percent) {
    if (typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = Math.ceil(percent * 3.6);
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 300 / difference);
  }

  function animate_to() {
    if (degrees == new_degrees) clearInterval(animation_loop);
    else if (degrees < new_degrees) degrees++;
    else degrees--;
    init();
  }

  draw(percent);
}

