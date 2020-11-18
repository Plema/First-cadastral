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

    function windowSize(){
      if ($(window).width() < '1280'){
  
        $('.first-napr-slider').slick({
          rows: 2,
          slidesToShow: 2, 
          slidesPerRow: 1,      
          arrows: false,  
          dots: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                dots: true,
              }
            },
            {
              breakpoint: 570,
              settings: {
                rows: 2,
                slidesToShow: 1, 
                slidesPerRow: 1,
                dots: true,
              }
            }
          ]
         });
        $('.second-napr-slider').slick({
          rows: 2,
          slidesToShow: 2, 
          slidesPerRow: 1,      
          arrows: false,  
          dots: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                dots: true,
              }
            },
            {
              breakpoint: 570,
              settings: {
                rows: 2,
                slidesToShow: 1, 
                slidesPerRow: 1,
                dots: true,
              }
            }
          ]
         });
        $('.four-napr-slider').slick({
          rows: 2,
          slidesToShow: 2, 
          slidesPerRow: 1,      
          arrows: false,  
          dots: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                dots: true,
              }
            },
            {
              breakpoint: 570,
              settings: {
                rows: 2,
                slidesToShow: 1, 
                slidesPerRow: 1,
                dots: true,
              }
            }
          ]
         });
      }
    }
    $(window).on('load resize',windowSize);

    
  $( ".title-napr" ).click(function(event) {
    $( ".title-napr").removeClass('act-title-napr')
    $(this).addClass('act-title-napr')

    var attrNaprt = $(this).data('napr');
    $('.slider-napr').removeClass('active-napr')
    $('.second-section').find('.' + attrNaprt).addClass('active-napr')
    $('.' + attrNaprt).slick('refresh');
  });
});


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.713846, 37.721843],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      })
  
      myPlacemark = new ymaps.Placemark([55.713989, 37.718659], {
        // balloonContent: 'пр-кт Волгоградский д. 43 корп. 3',
        // hintContent: 'пр-кт Волгоградский д. 43 корп. 3',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/myIcon.png',
          iconImageSize: [60, 65],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),
      myMap.geoObjects
          .add(myPlacemark);
  });

