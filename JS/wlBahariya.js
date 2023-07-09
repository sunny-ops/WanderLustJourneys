// open
var openEl = document.getElementsByClassName("open")[0];
var topEl = document.getElementsByClassName("top")[0];
var bottomEl = document.getElementsByClassName("bottom")[0];
window.onload = () => {
  topEl.style.top = `${-window.innerHeight * 0.5}px`;
  bottomEl.style.bottom = `${-window.innerHeight * 0.5}px`;
  setTimeout(() => {
    openEl.style.display = "none";
  }, 2000);
};

// scroll-indicator
var scrollIndicator = document.querySelector(".indicator");
// console.log(scrollIndicator);

// navbar scroll
var scrollDiv = document.querySelector(".scroll-div");
var navRight = document.querySelector(".nav-right");
var brand = document.querySelector(".brand");
var destinations = document.querySelector(".destinations");
window.onscroll = () => {
  //   console.log(window.scrollY);
  scrollIndicator.style.top = `${(window.scrollY * 80) / 1877}%`;
  brand.style.color = "#081c3a";
  console.log(destinations.style.color);
  destinations.style.color = "#081c3a";
  console.log(destinations.style.color);
  scrollDiv.style.top = `${window.scrollY / 3 - 80}px`;
  //   console.log(scrollDiv.style.top);
  if (window.scrollY > 240) {
    scrollDiv.style.top = "0px";
  }
};

// location-card hover
