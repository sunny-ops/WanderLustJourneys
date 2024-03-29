const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
