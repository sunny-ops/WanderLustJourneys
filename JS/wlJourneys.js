// open
var openEl = document.getElementsByClassName("open")[0];
var topEl = document.getElementsByClassName("top")[0];
var bottomEl = document.getElementsByClassName("bottom")[0];
// console.log(openEl);
// console.log(topEl);
// console.log(bottomEl);
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

// membership section
var verticalImgs = document.getElementsByClassName("vacation-image");
var cardLocs = document.getElementsByClassName("card-location")
var cardPrices = document.getElementsByClassName("card-price");
var membershipDots = document.getElementsByClassName("membership-dot");
var membershipOutlineCircle = document.getElementsByClassName("membership-outline-circle")
var egyptCircle = document.getElementById("egypt-circle");
var graceCircle = document.getElementById("grace-circle");
var indonesiaCircle = document.getElementById("indonesia-circle");
var franceCircle = document.getElementById("france-circle");
graceCircle.onclick = () => {
  console.log(membershipDots);
  verticalImgs[0].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcee44ed8fe667ad63e34_013.jpeg")
  membershipDots[1].style.backgroundColor = "rgb(8, 28, 58)";
  membershipOutlineCircle[1].style.display = "block";
  for (let i = 0; i < 4; i++) {
    if (i != 1) {
      membershipDots[i].style.backgroundColor = "rgb(230, 230, 243)";
      membershipOutlineCircle[i].style.display = "none";
    } else {
      membershipDots[1].style.backgroundColor = "rgb(8, 28, 58)";
      membershipOutlineCircle[1].style.display = "block";
    }
  }

}
