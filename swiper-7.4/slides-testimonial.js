const swiper = new Swiper('.swiper-testimonial', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar1',
    },
});
