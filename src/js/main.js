// --- Scroll к Якорям
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});



// --- Hamburger
$('.hamburger').on('click', function () {
    $('.header').toggleClass('mobile');
    $('html').toggleClass('hidden');
})





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
// $(window).scroll(function () {
//     var box1 = $('.header').offset().top;
//     /*Если сделали скролл на 100px задаём новый класс для header*/
//     if (box1 > 100) {
//         $('.simple-select').removeClass('open');
//     }
// });
// --- Закрытие списка при скролле 
$(window).scroll(function () {
    $('.simple-select').removeClass('open');
    $('.search').removeClass('active');
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


$('.products__add-cart, .btn__add').click(function () {
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




$(function () {
    $('.companies__inner').marquee({
        duration: 30000,
        startVisible: true,
        duplicated: true
    });
});



var swiperThing2 = new Swiper(".thing__slider2", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
var swiperThing = new Swiper(".thing__slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiperThing2,
    },
});




$('.thing__sizes-item').click(function () {
    $(this).toggleClass('active');
});


$('.search').click(function () {
    $(this).addClass('active');
});
// Убираем модальное окно при клике на другую область
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $('.search'); // тут указываем класс элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.search').removeClass('active');
    }
});

$('.search svg').click(function () {
    if ($('.search').hasClass('active')) {
        location.href = 'search.html';
    }
});

$('.search input').keydown(function (e) {
    if (e.keyCode === 13) {
        location.href = 'search.html';
    }
});



// Маска для input'a кредитная карточка
$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
// $('#card__input-numeral').click(function () {
//     $(this).setCursorPosition(0);
// }).mask("9999 9999 9999 9999", { "placeholder": "" });
// $('#card__input-numeral').mask("9999 9999 9999 9999", { "placeholder": "" });
$('#card__input-numeral').click(function () {
    $(this).setCursorPosition(0);
}).mask("9999 9999 9999 9999");
$('#card__input-numeral').mask("9999 9999 9999 9999");

$('#card__input-cvv').click(function () {
    $(this).setCursorPosition(0);
}).mask("999");
$('#card__input-cvv').mask("999");

$('#card__input-date').click(function () {
    $(this).setCursorPosition(0);
}).mask("99/99");
$('#card__input-date').mask("99/99");



// --- Проверка валидации 
$(document).ready(function () {
    $('#card__form').submit(function (e) {
        e.preventDefault();
        var name = $('#card__input-name').val();
        var card = $('#card__input-numeral').val();
        var date = $('#card__input-date').val();
        var cvv = $('#card__input-cvv').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        setTimeout(function () {
            $('.error').remove();
        }, 5000);

        if (name.length < 1) {
            $('#card__input-name').parents('.card__input-block').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#card__input-name').after('<span class="error">Заполните поле</span>');
            } else {
                $('#card__input-name').after('<span class="error">Fill in the field</span>');
            }
        } else {
            var regEx = /[^\s]+\s[^\s]+/;
            var validName = regEx.test(name);
            if (!validName) {
                $('#card__input-name').parents('.card__input-block').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#card__input-name').after('<span class="error">Заполните правильно</span>');
                } else {
                    $('#card__input-name').after('<span class="error">Fill in correctly</span>');
                }
            }
        }
        if (card.length < 1) {
            $('#card__input-numeral').parents('.card__input-block').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#card__input-numeral').after('<span class="error">Заполните поле</span>');
            } else {
                $('#card__input-numeral').after('<span class="error">Fill in the field</span>');
            }
        }
        if (date.length < 1) {
            $('#card__input-date').parents('.card__input-block').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#card__input-date').after('<span class="error">Заполните поле</span>');
            } else {
                $('#card__input-date').after('<span class="error">Fill in the field</span>');
            }
        }
        if (cvv.length < 1) {
            $('#card__input-cvv').parents('.card__input-block').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#card__input-cvv').after('<span class="error">Заполните поле</span>');
            } else {
                $('#card__input-cvv').after('<span class="error">Fill in the field</span>');
            }
        }
    });
});