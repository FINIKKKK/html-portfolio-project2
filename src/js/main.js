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


// --- Закрытие списка при скролле 
$(window).scroll(function () {
    $('.simple-select').removeClass('open');
    $('.search').removeClass('active');
});


// --- Активный Search
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
// Неактивный Search
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




// --- Slider Offers
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



// --- Slider Products
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



// --- Slider Top
const swiperTop = new Swiper('.top__inner', {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
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


// --- Удаление элемента в корзине
$('.cart__product-btn').click(function () {
    $(this).parents('.cart__product').remove();

    if ($('.cart__product').length == false) {
        $(".cart__bill").remove();
        $(".cart-empty").css("display", "flex");
    }
});



// --- Проверка валидации формы Subscribe
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



// --- Анимация при крлике на кнопку-сердце
$('.products__add-heart').click(function () {
    $(this).toggleClass('active');
});
// --- Анимация при крлике на кнопку-корзина
$('.products__add-cart, .btn__add').click(function () {
    $(this).toggleClass('btn_like');
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




// --- Проверка валидации формы Comment
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



// --- Бегущая строка Companies
$(function () {
    $('.companies__inner').marquee({
        duration: 30000,
        startVisible: true,
        duplicated: true
    });
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



// --- Проверка валидации формы Card
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


// --- Переключить grid у shop
$('.shop__header-btn1').click(function () {
    $('.shop__header-btn').removeClass('active');
    $(this).toggleClass('active');
    $('.shop__products').removeClass('grid2');
    $('.shop__products').addClass('grid1');
});
$('.shop__header-btn2').click(function () {
    $('.shop__header-btn').removeClass('active');
    $(this).toggleClass('active');
    $('.shop__products').removeClass('grid1');
    $('.shop__products').addClass('grid2');
});



// --- АКтивация Color
$('.shop__color-item').click(function () {
    $(this).toggleClass('active');
});
// --- АКтивация checkbox
$('.checkbox label').click(function () {
    $(this).parent().find('.custom-checkbox').toggleClass('checked');
})
// --- Скрывем Categories
$('.shop__categories-title').click(function () {
    $(this).parent().toggleClass('hide');
});



// --- Открываем sidebar
$('.filters__btn').click(function () {
    $(this).toggleClass('active');
    $('.shop__sidebar').toggleClass('show');
});
// Убираем модальное окно при клике на другую область
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $('.shop__sidebar, .filters__btn'); // тут указываем класс элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.shop__sidebar').removeClass('show');
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


$('.shop__sidebar-inner').click(function () {
    if ($('.shop__color-item').hasClass('active')) {
        $(".shop__filters-clear").removeClass('disabled');
        $(".shop__filters-apply").removeClass('disabled');
    }

    if ($('.custom-checkbox').hasClass('checked')) {
        $(".shop__filters-clear").removeClass('disabled');
        $(".shop__filters-apply").removeClass('disabled');
    }
});
$('#slider-range').click(function () {
    if ($('#amount').val() != '$0 - $300') {
        $(".shop__filters-clear").removeClass('disabled');
        $(".shop__filters-apply").removeClass('disabled');
    }
});


// --- Reset filters
$('.shop__filters-clear').click(function () {
    $('.shop__color-item').removeClass('active');
    $('.custom-checkbox').removeClass('checked');
    $('#amount').val('$0 - $300');
    $("#slider-range").slider("option", "values", [0, 300]);
});



// --- Custom Cursor
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
        // Set up element sizes
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a, .simple-select, .accordion__item-header, button, .search, .prev, .next, .swiper-pagination-bullet, input, .shop__color-item, .checkbox, #slider-range').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                // self.toggleCursorSize();
                $('.cursor-dot-outline').css('background-color', 'transparent');
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                // self.toggleCursorSize();
                $('.cursor-dot-outline').css('background-color', 'rgba(28,28,28,.5)');
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$outline.style.opacity = 1;
        } else {
            self.$outline.style.opacity = 0;
        }
    },

}
cursor.init();



// --- Проверка геолокации и автоматическое определение языка страницы
$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip",
    success: function (data) {
        // Коды русскоязычных стран
        let countries = ["KZ", "UA", "RU", "BY", "UZ", "TM", "GE", "AZ", "MD", "KG"];

        // Изменение атрибутта lang у html
        if (countries.includes(data.country_code)) {
            $("html").attr("lang", "ru");
        } else {
            $("html").attr("lang", "en");
        }

        // Перевод страницы в зависимости от атрибута lang
        var tran = new Translater({
            lang: `${$("html").attr("lang")}`
        });

        // Смена активного элемента в списке языков
        if ($("html").attr("lang") === 'ru') {
            $(".languages").parent().find('ul li').removeClass('active');
            $(".languages").parent().find('ul li').first().addClass('active');
            $(".languages").parent().find('span').html('ru');

            $(".shop__header-filter[lang='en']").parent().css('display', 'none');
        } else {
            $(".languages").parent().find('ul li').removeClass('active');
            $(".languages").parent().find('ul li').last().addClass('active');
            $(".languages").parent().find('span').html('en');

            $(".shop__header-filter[lang='ru']").parent().css('display', 'none');
        }

        // Смена Title
        function changeTitle() {
            var url = window.location.href;
            var page1 = new RegExp("/");
            var page2 = new RegExp("/about.html");
            var page3 = new RegExp("/blog.html");
            var page4 = new RegExp("/cart.html");
            var page5 = new RegExp("/contacts.html");
            var page6 = new RegExp("/search.html");
            var page7 = new RegExp("/shop.html");
            var page8 = new RegExp("/single-post.html");

            console.log(page1.test(url) && $("html").attr("lang") === 'ru')
            if (page1.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Главная");
            }
            else if (page1.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Home");
            }
            else if (page2.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | О нас");
            }
            else if (page2.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | About");
            }
            else if (page3.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Блог");
            }
            else if (page3.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Blog");
            }
            else if (page4.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Корзина");
            }
            else if (page4.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Cart");
            }
            else if (page5.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Контакты");
            }
            else if (page5.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Contacts");
            }
            else if (page6.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Поиск");
            }
            else if (page6.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Search");
            }
            else if (page7.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Магазин");
            }
            else if (page7.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Shop");
            }
            else if (page8.test(url) && $("html").attr("lang") === 'ru') {
                $("title").html("Проект 2 | Проект-2 | Пост | Модные тренды осени 2021");
            }
            else if (page8.test(url) && $("html").attr("lang") === 'en') {
                $("title").html("Project 2 | Project-2 | Post | Fall 2021 Fashion Trends");
            }
            else {
                $("title").html("404");
            }
        }

        // Смена языка в атрибутте lang
        $(".languages").parent().find("a").on("click", function (e) {
            e.preventDefault();
            $("html").attr("lang", $(this).text());

            changeTitle();
        });
        // Смена языка в списке
        $(".languages").parent().find('ul li a').first().click(function () {
            tran.setLang('default');
            $(".shop__header-filter[lang='ru']").parent().css('display', 'block');
            $(".shop__header-filter[lang='en']").parent().css('display', 'none');
        });
        $(".languages").parent().find('ul li a').last().click(function () {
            tran.setLang('en');
            $(".shop__header-filter[lang='ru']").parent().css('display', 'none');
            $(".shop__header-filter[lang='en']").parent().css('display', 'block');
        });

        changeTitle();
    }
});


