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



// --- Hamburger
$('.hamburger').on('click', function () {
    $('.header').toggleClass('mobile')
})



// --- Slider "Offers"
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

    // if (count === 9) {
    //     $(this).toggleClass('disabled');
    // } else {
    //     $(this).removeClass('disabled');
    // }
    // if (count < 9) {
    // }
    console.log(count)
    // const checkCount = () => {
    if (count === 10 || count === 1) {
        $(this).addClass('disabled');
    } else {
        $(this).removeClass('disabled');
    }
    // }
    // checkCount();
});
$(".cart__counter--minus").click(function () {
    var count = $(this).parent().find(".cart__counter-number").val();
    // if (count > 1) {
    $(this).parent().find(".cart__counter-number").val(--count);
    // }
    if (count === 10 || count === 1) {
        $(this).addClass('disabled');
    } else {
        $(this).removeClass('disabled');
    }
});


$('.cart__product-btn').click(function () {
    $(this).parents('.cart__product').remove();

    if ($('.cart__product').length == false) {
        $(".cart__bill").css("display", "none");
        $(".cart__none").css("display", "block");
    }
});




// // --- Проверка валидации 
// $(document).ready(function () {
//     $('#subscribe__form').submit(function (e) {
//         e.preventDefault();
//         var name = $('#subscribe__form-name').val();
//         var email = $('#subscribe__form-email').val();

//         $(".error").remove();
//         $(".input").removeClass('input-error');

//         setTimeout(function () {
//             $('.error').remove();
//         }, 5000);

//         if (name.length < 1) {
//             $('#subscribe__form-name').addClass('input-error');
//             if ($("html").attr("lang") === 'ru') {
//                 $('#subscribe__form-name').after('<span class="error">Заполните поле</span>');
//             } else {
//                 $('#subscribe__form-name').after('<span class="error">Fill in the field</span>');
//             }
//         }
//         if (email.length < 1) {
//             $('#subscribe__form-email').addClass('input-error');
//             if ($("html").attr("lang") === 'ru') {
//                 $('#subscribe__form-email').after('<span class="error">Заполните поле</span>');
//             } else {
//                 $('#subscribe__form-email').after('<span class="error">Fill in the field</span>');
//             }
//         } else {
//             var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             var validEmail = regEx.test(email);
//             if (!validEmail) {
//                 $('#subscribe__form-email').addClass('input-error');
//                 if ($("html").attr("lang") === 'ru') {
//                     $('#subscribe__form-email').after('<span class="error">Заполните правильно</span>');
//                 } else {
//                     $('#subscribe__form-email').after('<span class="error">Fill in correctly</span>');
//                 }
//             }
//         }
//     });
// });



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