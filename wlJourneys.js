var scrollDiv = document.querySelector(".scroll-div");
var navRight = document.querySelector(".nav-right");
var brand = document.querySelector(".brand");
var destinations = document.querySelector(".destinations");
window.onscroll = () => {
  //   console.log(window.scrollY);
  brand.style.color = "#081c3a";
  destinations.style.color = "#081c3a";
  scrollDiv.style.top = `${window.scrollY / 5 - 80}px`;
  //   console.log(scrollDiv.style.top);
  if (window.scrollY > 400) {
    scrollDiv.style.top = "0px";
  }
};

// slider
var left = document.getElementById("slider-left");
var right = document.getElementById("slider-right");
var inner = document.querySelector(".slider-inner");
var firstImg = document.querySelector(".first-img");
var cloneImg = firstImg.cloneNode();
inner.appendChild(cloneImg);
var i = 1;
right.onclick = () => {
  i++;
  inner.style.transition = "0.5s";
  inner.style.left = `${-i * 800}px`;
  if (i == 4) {
    setTimeout(() => {
      i = 0;
      inner.style.left = `${-i * 800}px`;
      inner.style.transition = "none";
    }, 500);
  }
};

left.onclick = () => {
  i--;
  if (i == -1) {
    i = 4;
    inner.style.transition = "none";
    inner.style.left = `${-i * 800}px`;
    setTimeout(() => {
      i--;
      inner.style.transition = "0.5s";
      inner.style.left = `${-i * 800}px`;
    }, 0);
    // 如果43-47注释掉，直接换成下面几行为什么不行呢？
    // i--;
    // inner.style.transition = "0.5s";
    // inner.style.left = `${-i * 800}px`;
  } else {
    inner.style.transition = "0.5s";
    inner.style.left = `${-i * 800}px`;
  }
};
