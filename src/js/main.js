$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 200 ? $('.header').addClass('header-mini') : $('.header').removeClass('header-mini');
});


$(document).ready(function () {
    
    $('.offers__items').slick({
        nextArrow: '<div class="next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        prevArrow: '<div class="prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                }
            },
        ]
    })


    $('.hamburger').on('click', function () {
        $('.header').toggleClass('mobile')
    })


});


