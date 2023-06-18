var scrollDiv = document.querySelector(".scroll-div");
var navRight = document.querySelector(".nav-right");
var brand = document.querySelector(".brand");
var destinations = document.querySelector(".destinations");
window.onscroll = () => {
  // console.log(window.scrollY);
  brand.style.color = "#081c3a";
  destinations.style.color = "#081c3a";
  scrollDiv.style.top = `${window.scrollY / 5 - 80}px`;
  //   console.log(scrollDiv.style.top);
  if (window.scrollY > 400) {
    scrollDiv.style.top = "0px";
  }
};

var regName = /^[a-z]{3,10}$/i;
var regEmail = /^\w{1,10}@[a-z]{3,15}.com$/i;
// 如果想写成.com 或者.edu结尾，写成regEmail = /^\w{1,10}@[a-z]{3,15}.(com|edu)$/i，效果就不对了，应该怎么写呢？
var regEmail1 =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var regPhone = /^\d{10}$/;
var firstNameEl = document.getElementById("First-name");
var lastNameEl = document.getElementById("Last-name");
var emailEl = document.getElementById("Email");
var phoneEl = document.getElementById("Phone-number");

firstNameEl.onchange = () => {
  console.log(firstNameEl.value);
  if (!regName.test(firstNameEl.value)) {
    alert("Not a valid First Name.");
  }
};

lastNameEl.onchange = () => {
  if (!regName.test(lastNameEl.value)) {
    alert("Not a valid Last Name.");
  }
};

emailEl.onchange = () => {
  console.log(emailEl.value);
  if (!regEmail1.test(emailEl.value)) {
    alert("Not a valid Email.");
  }
};

phoneEl.onchange = () => {
  console.log(phoneEl.value);
  if (!regPhone.test(phoneEl.value)) {
    alert("Not a valid Email.");
  }
};
