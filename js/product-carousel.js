const swiper = new Swiper('.swiper-most-popular, .swiper-sneakers, .swiper-apparel, .swiper-related-product', {
    // Parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,

    // Buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Breakpoints
    breakpoints: {

        350: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },

        600: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },

        768: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },

        992: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },

        1200: {
            slidesPerView: 5.5,
            slidesPerGroup: 5,
            spaceBetween: 50,
        }
    }

});