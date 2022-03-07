// --- Header-Mini при скролле
$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 200 ? $('.header').addClass('header-mini') : $('.header').removeClass('header-mini');
});
if ($(window).scrollTop() > 200) {
    $('.header').addClass('header-mini')
} else {
    $('.header').removeClass('header-mini');
}



// --- Scroll к Якорям
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});



// --- Hamburger
$('.hamburger').on('click', function () {
    $('.header').toggleClass('mobile')
})



// --- Slider "Offers"
// $('.offers__items').slick({
//     nextArrow: '<div class="next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
//     prevArrow: '<div class="prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
//     responsive: [
//         {
//             breakpoint: 600,
//             settings: {
//                 arrows: false,
//             }
//         },
//     ]
// })

const offersSwiper = new Swiper('.offers__items', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        enabled: false,
        delay: 7000,
        disableOnInteraction: false,
    },
});
// Запуск Аutoplay только когда пользователь вошел в область видимости
$(window).scroll(function () {
    $('.offers').each(function () {
        if ($(window).scrollTop() + $(window).height() >= $(this).position().top && $(window).scrollTop() < $(this).position().top + $(this).height()) {
            offersSwiper.autoplay.start();
        }
    });
});



const productsSwiper = new Swiper('.products__slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        enabled: false,
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        950: {
            slidesPerView: 5,
        },
        750: {
            slidesPerView: 4,
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            centeredSlides: true,
        },
    },
});
// Запуск Аutoplay только когда пользователь вошел в область видимости
$(window).scroll(function () {
    $('.similar').each(function () {
        if ($(window).scrollTop() + $(window).height() >= $(this).position().top && $(window).scrollTop() < $(this).position().top + $(this).height()) {
            productsSwiper.autoplay.start();
        }
    });
});




// --- Закрытие списка при скролле 
$(window).scroll(function () {
    var box1 = $('.header').offset().top;
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (box1 > 100) {
        $('.simple-select').removeClass('open');
    }
});




// --- Диапазон цен
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [0, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});



// --- Счетчик в козине
$(".cart__counter--plus").click(function () {
    var count = $(this).parent().find(".cart__counter-number").val();
    $(this).parent().find(".cart__counter-number").val(++count);

    if (count === 10 || count === 1) {
        $(this).addClass('disabled');
    } else {
        $(this).parent().find(".cart__counter-btn").removeClass('disabled');
    }
    console.log(count)
});
$(".cart__counter--minus").click(function () {
    var count = $(this).parent().find(".cart__counter-number").val();
    $(this).parent().find(".cart__counter-number").val(--count);


    if (count === 10 || count === 1) {
        $(this).addClass('disabled');
    } else {
        $(this).parent().find(".cart__counter-btn").removeClass('disabled');
    }
});

$('.cart__product-btn').click(function () {
    $(this).parents('.cart__product').remove();

    if ($('.cart__product').length == false) {
        $(".cart__bill").remove();
        $(".cart-empty").css("display", "flex");
    }
});







// --- Проверка валидации 
$(document).ready(function () {
    $('#subscribe__form').submit(function (e) {
        e.preventDefault();
        var email = $('#subscribe__form-email').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        setTimeout(function () {
            $('.error').remove();
        }, 5000);


        if (email.length < 1) {
            $('#subscribe__form-email').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#subscribe__form-email').after('<span class="error">Заполните поле</span>');
            } else {
                $('#subscribe__form-email').after('<span class="error">Fill in the field</span>');
            }
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#subscribe__form-email').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#subscribe__form-email').after('<span class="error">Заполните правильно</span>');
                } else {
                    $('#subscribe__form-email').after('<span class="error">Fill in correctly</span>');
                }
            }
        }
    });
});



var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("heart");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


$('.products__add-heart').click(function () {
    $(this).toggleClass('active');
});




// --- Анимация при скролле(WOW)
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 100,
        duraction: 1,
        mobile: true,
        live: true,
    }
)
wow.init();



var tran = new Translater({
    lang: `${$("html").attr("lang")}`
});



// --- Проверка валидации 
$(document).ready(function () {
    $('#comment__form').submit(function (e) {
        e.preventDefault();
        var name = $('#comment__form-name').val();
        var email = $('#comment__form-email').val();
        var message1 = $('#comment__form-message1').val();
        var message2 = $('#comment__form-message2').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        setTimeout(function () {
            $('.error').remove();
        }, 5000);

        if (name.length < 1) {
            $('#comment__form-name').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#comment__form-name').after('<span class="error">Заполните поле</span>');
            } else {
                $('#comment__form-name').after('<span class="error">Fill in the field</span>');
            }
        }
        if (email.length < 1) {
            $('#comment__form-email').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#comment__form-email').after('<span class="error">Заполните поле</span>');
            } else {
                $('#comment__form-email').after('<span class="error">Fill in the field</span>');
            }
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#comment__form-email').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#comment__form-email').after('<span class="error">Заполните правильно</span>');
                } else {
                    $('#comment__form-email').after('<span class="error">Fill in correctly</span>');
                }
            }
        }
        if ($("html").attr("lang") === 'ru') {
            if (message1.length < 1) {
                $('#comment__form-message1').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#comment__form-message1').after('<span class="error">Заполните поле</span>');
                } else {
                    $('#comment__form-message1').after('<span class="error">Fill in the field</span>');
                }
            }
        } else {
            if (message2.length < 1) {
                $('#comment__form-message2').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#comment__form-message2').after('<span class="error">Заполните поле</span>');
                } else {
                    $('#comment__form-message2').after('<span class="error">Fill in the field</span>');
                }
            }
        }
    });
});


$('.products__add-cart').click(function () {
    $(this).toggleClass('btn_like');
});


$('.products__add-cart, .products__add-heart').click(function (e) {
    e.preventDefault();
});



// --- Проверка валидации 
$(document).ready(function () {
    $('#contact__form').submit(function (e) {
        e.preventDefault();
        var name = $('#contact__form-name').val();
        var email = $('#contact__form-email').val();
        var message1 = $('#contact__form-message1').val();
        var message2 = $('#contact__form-message2').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        setTimeout(function () {
            $('.error').remove();
        }, 5000);

        if (name.length < 1) {
            $('#contact__form-name').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#contact__form-name').after('<span class="error">Заполните поле</span>');
            } else {
                $('#contact__form-name').after('<span class="error">Fill in the field</span>');
            }
        }
        if (email.length < 1) {
            $('#contact__form-email').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#contact__form-email').after('<span class="error">Заполните поле</span>');
            } else {
                $('#contact__form-email').after('<span class="error">Fill in the field</span>');
            }
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#contact__form-email').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#contact__form-email').after('<span class="error">Заполните правильно</span>');
                } else {
                    $('#contact__form-email').after('<span class="error">Fill in correctly</span>');
                }
            }
        }
        if ($("html").attr("lang") === 'ru') {
            if (message1.length < 1) {
                $('#contact__form-message1').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#contact__form-message1').after('<span class="error">Заполните поле</span>');
                } else {
                    $('#contact__form-message1').after('<span class="error">Fill in the field</span>');
                }
            }
        } else {
            if (message2.length < 1) {
                $('#contact__form-message2').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#contact__form-message2').after('<span class="error">Заполните поле</span>');
                } else {
                    $('#contact__form-message2').after('<span class="error">Fill in the field</span>');
                }
            }
        }
    });
});




$(function() {
    $('.companies__inner').marquee({
      duration: 7000,
      startVisible: true,
      duplicated: true
    });
  });