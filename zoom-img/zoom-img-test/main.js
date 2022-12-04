let img, lens, result, cx, cy;
img = document.getElementById("myImage");
result = document.getElementById("myResult");

/* Tạo phần tử lens */
lens = document.createElement("div");

/* Tạo thuộc tính cho phần tử lens */
lens.setAttribute("class", "img-zoom-lens");

/* Chèn phần tử mới lens vào trước thẻ lmg */
img.parentElement.insertBefore(lens, img);

/* Xác định tỷ lệ giữa phần tử mới lens và phần tử div result */
cx = result.offsetWidth / lens.offsetWidth;
cy = result.offsetHeight / lens.offsetHeight;

/* Tạo thuộc tính background cho phần tử div result */
result.style.backgroundImage = "url('" + img.src + "')";
result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";

/* Add sự kiện cho phần tử lens/ img khi con trỏ di chuyển trên hình ảnh */
lens.addEventListener("mousemove", movelens);
lens.addEventListener("mouseout", function () {
  this.style.visibility = "hidden";
  //   result.style.display = "none";
});
img.addEventListener("mousemove", movelens);

/* Add sự kiện áp dụng trên màn hình cảm ứng */
lens.addEventListener("touchmove", movelens);
img.addEventListener("touchmove", movelens);

// Định nghĩa hàm lấy tọa độ của con trỏ chuột
function getCursorPos(e) {
  let a,
    x = 0,
    y = 0;
  e = e || window.event;

  /* Lấy vị trí x, y của hình ảnh */
  a = img.getBoundingClientRect();

  /* Tính tọa độ x, y của con trỏ liên quan tới hình ảnh */
  x = e.pageX - a.left;
  y = e.pageY - a.top;

  /* Xem xét thêm khi trang cuộn */
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return { x: x, y: y };
}

// Định nghĩa hàm zoom ảnh khi di chuột
function movelens(e) {
  //   result.style.display = "block";
  let pos, x, y;

  /* Ngăn chặn bất kỳ hành động nào khác có thể xảy ra khi di chuyển qua hình ảnh */
  e.preventDefault();

  /* Lấy tọa độ x, y của con trỏ */
  pos = getCursorPos(e);

  /* Tính toán tọa độ của phần tử lens */
  x = pos.x - lens.offsetWidth / 2;
  y = pos.y - lens.offsetHeight / 2;

  /* Ngăn phần tử lens chạy ra bên ngoài hình ảnh */
  if (x > img.width - lens.offsetWidth) {
    x = img.width - lens.offsetWidth;
  }
  if (x < 0) {
    x = 0;
  }
  if (y > img.height - lens.offsetHeight) {
    y = img.height - lens.offsetHeight;
  }
  if (y < 0) {
    y = 0;
  }

  /* Gán vị trí cho phần tử lens */
  lens.style.visibility = "visible";
  lens.style.top = y + "px";
  lens.style.left = x + "px";

  /* Hiển thị background lên phần tử result */
  result.style.backgroundPosition = "-" + x * cx + "px " + "-" + y * cy + "px";
}
