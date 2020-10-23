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
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center: [55.713917, 37.721526], // Москва
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
    myPlacemark = new ymaps.Placemark([55.713989 ,37.718659], {
      balloonContent: 'пр-кт Волгоградский д. 43 корп. 3'
    }, {
        iconLayout: 'default#image',
        // preset: 'islands#icon',
        iconColor: '#FF3333'
    }),
    myMap.geoObjects
        .add(myPlacemark);
}