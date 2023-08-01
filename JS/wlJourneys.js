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

//home-hero swiper
var homeHero = document.getElementsByClassName("home-hero")[0];
var arrowLeft = document.querySelector(".w-slider-arrow-right");
var arrowRight = document.querySelector(".w-slider-arrow-left");
var featuredLocation = document.querySelectorAll(".featured-location");

let i = 0;
console.log(arrowLeft);
var mapBcimg = new Map();
mapBcimg.set(
  0,
  "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg"
);
mapBcimg.set(
  1,
  "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg"
);
mapBcimg.set(
  2,
  "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg"
);
arrowLeft.onclick = () => {
  i = (i + 1) % 3;
  homeHero.style.backgroundImage = `url(${mapBcimg.get(i)})`;
  featuredLocation.forEach((v, i) => {
    v.style.display = "none";
  });
  featuredLocation[i].style.display = "flex";
};
arrowRight.onclick = () => {
  i--;
  if (i < 0) {
    i = 2;
  }
  featuredLocation.forEach((v, i) => {
    v.style.display = "none";
  });
  featuredLocation[i].style.display = "flex";
  homeHero.style.backgroundImage = `url(${mapBcimg.get(i)})`;
};

// scroll-indicator
var scrollIndicator = document.querySelector(".indicator");
// console.log(scrollIndicator);

// navbar scroll
var scrollDiv = document.querySelector(".scroll-div");
var navRight = document.querySelector(".nav-right");
var brand = document.querySelector(".brand");
var destinations = document.querySelector(".destinations");
var drop = document.querySelector(".dropdown-icon");
window.onscroll = () => {
  // console.log(window.scrollY);
  scrollIndicator.style.top = `${(window.scrollY * 80) / 6432.5}%`;
  brand.style.color = "#081c3a";
  destinations.style.color = "#081c3a";
  drop.setAttribute("stroke", "rgb(23, 31, 45)");
  scrollDiv.style.top = `${window.scrollY / 5 - 80}px`;
  //   console.log(scrollDiv.style.top);
  if (window.scrollY > 400) {
    scrollDiv.style.top = "0px";
  }
};

// hero video pop
var videoHoverButton = document.querySelector(".video-hover-button");
var heroVideoPopup = document.querySelector(".hero-video-popup");
var heroVideoWrapper = document.querySelector(".hero-video-wrapper");
var closeLink = document.querySelector(".close-link");
videoHoverButton.onclick = () => {
  heroVideoPopup.style.zIndex = 1000;
  heroVideoWrapper.style.opacity = "1";
  heroVideoWrapper.style.transform = "skew(0deg, 0deg)";
};
closeLink.onclick = () => {
  heroVideoWrapper.style.opacity = "0";
};

// membership section
var verticalImgs = document.getElementsByClassName("vacation-image");
var cardLocs = document.getElementsByClassName("card-location");
var cardPrices = document.getElementsByClassName("dynamic-price-text");
var membershipDots = document.getElementsByClassName("membership-dot");
var membershipOutlineCircle = document.getElementsByClassName(
  "membership-outline-circle"
);
// var membershipOutlineCircle = document.querySelectorAll(
//   ".membership-outline-circle"
// );
var membershipWrapper = document.getElementsByClassName("membership-wrapper");
var egyptCircle = document.getElementById("egypt-circle");
var graceCircle = document.getElementById("grace-circle");
var indonesiaCircle = document.getElementById("indonesia-circle");
var franceCircle = document.getElementById("france-circle");
var line = document.querySelector(".vacation-line");
// console.log(membershipOutlineCircle);

graceCircle.onclick = () => {
  verticalImgs[0].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcee44ed8fe667ad63e34_013.jpeg"
  );
  verticalImgs[1].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dceb50894ded296b2297d_019.jpeg"
  );
  verticalImgs[2].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg"
  );
  cardLocs[0].innerText = "Palaiokastritsa";
  cardLocs[1].innerText = "Meteora";
  cardLocs[2].innerText = "Thessaloniki";
  cardPrices[0].innerHTML = "<div>$ 5600</div>";
  cardPrices[1].innerHTML = "<div>$ 2800</div>";
  cardPrices[2].innerHTML = "<div>$ 6700</div>";
  changeDots(1);
};

egyptCircle.onclick = () => {
  verticalImgs[0].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg"
  );
  verticalImgs[1].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d4d191b27a11_022.jpeg"
  );
  verticalImgs[2].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd02d03615176c83d10e5_024.jpeg"
  );
  cardLocs[0].innerText = "Bahariya Oasis";
  cardLocs[1].innerText = "Sahl Hasheesh";
  cardLocs[2].innerText = "Alexandria";
  cardPrices[0].innerHTML = "<div>$ 6400</div>";
  cardPrices[1].innerHTML = "<div>$ 7700</div>";
  cardPrices[2].innerHTML = "<div>$ 5300</div>";
  changeDots(0);
};

indonesiaCircle.onclick = () => {
  verticalImgs[0].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd099bae3eb2843495ff1_034.jpeg"
  );
  verticalImgs[1].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd099bae3eb0eaf495fc9_035.jpeg"
  );
  verticalImgs[2].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd0b068e13e9e0a4aa1e0_036.jpeg"
  );
  cardLocs[0].innerText = "Canggu";
  cardLocs[1].innerText = "Komodo";
  cardLocs[2].innerText = "Penida Island";
  cardPrices[0].innerHTML = "<div>$ 6500</div>";
  cardPrices[1].innerHTML = "<div>$ 7600</div>";
  cardPrices[2].innerHTML = "<div>$ 2800</div>";
  changeDots(2);
};

franceCircle.onclick = () => {
  verticalImgs[0].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd1ef1d9b0b767714525_001.jpeg"
  );
  verticalImgs[1].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd5d6a5c000c4f1cf28e_005.jpeg"
  );
  verticalImgs[2].setAttribute(
    "src",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd73bae3eb8d1e477694_004.jpeg"
  );
  cardLocs[0].innerText = "Bonifacio";
  cardLocs[1].innerText = "Brittany";
  cardLocs[2].innerText = "Carcassonne";
  cardPrices[0].innerHTML = "<div>$ 1400</div>";
  cardPrices[1].innerHTML = "<div>$ 3600</div>";
  cardPrices[2].innerHTML = "<div>$ 3900</div>";
  changeDots(3);
};

changeDots = (index) => {
  for (let i = 0; i < 4; i++) {
    membershipOutlineCircle[i].style.width = "12px";
    membershipOutlineCircle[i].style.height = "12px";
    membershipOutlineCircle[i].style.border = "0px solid #fff";
    membershipDots[i].style.backgroundColor = "#e6e6f3";
    if (i <= index) {
      membershipDots[i].style.backgroundColor = "rgb(8, 28, 58)";
    }
  }
  membershipOutlineCircle[index].style.border = "2px solid rgb(8, 28, 58)";
  membershipOutlineCircle[index].style.width = "42px";
  membershipOutlineCircle[index].style.height = "42px";
  membershipOutlineCircle[index].style.backgroundColor = "rgb(255, 255, 255)";
  line.style.width = `${25 * (index + 1)}%`;
};
