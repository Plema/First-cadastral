$(document).ready(function(){

    var SwiperAdv = new Swiper('.slider-advantages', {
      speed: 400,
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: false,
      pagination: {
        el: '.swiper-pagination-adv',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
    });

    $('.slider-clients').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      prevArrow: $('.prev-client'),
      nextArrow: $('.next-client'),
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: false
          }
        },
      ]
    });

});


var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.713989, 37.718659 ], // Москва
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });

}