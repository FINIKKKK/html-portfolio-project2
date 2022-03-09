// Проверка поддержки webp, добавление класс webp или no-webp для HTML
(function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  })
}())


// Jquery ----------------
@@include('../../node_modules/jquery/dist/jquery.min.js');



// Plugins ----------------
@@include('./plugins/slick.min.js');
@@include('./plugins/jquery-ui.min.js');
@@include('./plugins/simple-select.js');
@@include('./plugins/jquery.maskedinput.js');

@@include('../../node_modules/swiper/swiper-bundle.min.js');
@@include('../../node_modules/wowjs/dist/wow.min.js');
@@include('../../node_modules/translater.js/dist/translater.min.js');
@@include('../../node_modules/jquery.marquee/jquery.marquee.min.js');

// Main-JS -----------------
@@include('./main.js');



