// open
var openEl = document.getElementsByClassName("open")[0];
var topEl = document.getElementsByClassName("top")[0];
var bottomEl = document.getElementsByClassName("bottom")[0];
console.log(openEl);
console.log(topEl);
console.log(bottomEl);
window.onload = () => {
  topEl.style.top = `${-window.innerHeight * 0.5}px`;
  bottomEl.style.bottom = `${-window.innerHeight * 0.5}px`;
  setTimeout(() => {
    openEl.style.display = "none";
  }, 2000);
};

// navbar scroll
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


