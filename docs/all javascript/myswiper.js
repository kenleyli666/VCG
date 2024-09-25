document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
