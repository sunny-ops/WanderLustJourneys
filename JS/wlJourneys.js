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
var cardPrices = document.getElementsByClassName("dynamic-price-text");
var membershipDots = document.getElementsByClassName("membership-dot");
var membershipOutlineCircle = document.getElementsByClassName("membership-outline-circle");
var membershipWrapper = document.getElementsByClassName("membership-wrapper");
var egyptCircle = document.getElementById("egypt-circle");
var graceCircle = document.getElementById("grace-circle");
var indonesiaCircle = document.getElementById("indonesia-circle");
var franceCircle = document.getElementById("france-circle");
graceCircle.onclick = () => {
  // console.log(membershipDots);
  // console.log(cardLocs);
  // console.log(cardPrices);
  verticalImgs[0].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcee44ed8fe667ad63e34_013.jpeg");
  verticalImgs[1].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dceb50894ded296b2297d_019.jpeg");
  verticalImgs[2].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg");
  cardLocs[0].innerText = "Palaiokastritsa";
  cardLocs[1].innerText = "Meteora";
  cardLocs[2].innerText = "Thessaloniki";
  cardPrices[0].innerHTML = "<div>$ 5600</div>";
  cardPrices[1].innerHTML = "<div>$ 2800</div>";
  cardPrices[2].innerHTML = "<div>$ 6700</div>";
  membershipDots[1].style.backgroundColor = "rgb(8, 28, 58)";
  membershipOutlineCircle[1].style.display = "block";
  for (let i = 0; i < 4; i++) {
    if (i != 1) {
      membershipOutlineCircle[i].style.display = "none";
    } else if (i == 1) {
      membershipOutlineCircle[i].style.display = "block";
    }
    if (i <= 1) {
      membershipWrapper[i].style.borderBottomColor = "rgb(8, 28, 58)";
      membershipDots[i].style.backgroundColor = "rgb(8, 28, 58)";
    } else if (i > 1) {
      membershipWrapper[i].style.borderBottomColor = "#e6e6f3";
      membershipDots[i].style.backgroundColor = "rgb(230, 230, 243)";
    }
  }
}

egyptCircle.onclick = () => {
  verticalImgs[0].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg");
  verticalImgs[1].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d4d191b27a11_022.jpeg");
  verticalImgs[2].setAttribute("src", "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd02d03615176c83d10e5_024.jpeg");
  cardLocs[0].innerText = "Bahariya Oasis";
  cardLocs[1].innerText = "Sahl Hasheesh";
  cardLocs[2].innerText = "Alexandria";
  cardPrices[0].innerHTML = "<div>$ 6400</div>";
  cardPrices[1].innerHTML = "<div>$ 7700</div>";
  cardPrices[2].innerHTML = "<div>$ 5300</div>";
  membershipDots[1].style.backgroundColor = "rgb(8, 28, 58)";
  membershipOutlineCircle[1].style.display = "block";
  for (let i = 0; i < 4; i++) {
    if (i != 0) {
      membershipOutlineCircle[i].style.display = "none";
    } else if (i == 0) {
      membershipOutlineCircle[i].style.display = "block";
    }
    if (i <= 0) {
      membershipWrapper[i].style.borderBottomColor = "rgb(8, 28, 58)";
      membershipDots[i].style.backgroundColor = "rgb(8, 28, 58)";
    } else if (i > 0) {
      membershipWrapper[i].style.borderBottomColor = "#e6e6f3";
      membershipDots[i].style.backgroundColor = "rgb(230, 230, 243)";
    }
  }
}
