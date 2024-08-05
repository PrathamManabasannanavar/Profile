var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000, // milliseconds between slides
        disableOnInteraction: false, // enable autoplay even if user interacts with slides
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // enable pagination bullets clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
