var scrollDiv = document.querySelector(".scroll-div");
console.log(scrollDiv);
console.log(scrollDiv.innerHTML);
window.onscroll = () => {
  console.log(window.scrollY);
  scrollDiv.style.top = `${window.scrollY - 80}px`;
  console.log(scrollDiv.style.top);
  if (window.scrollY > 80) {
    scrollDiv.style.top = "0px";
  }
};
