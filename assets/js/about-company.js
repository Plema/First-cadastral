$(document).ready(function(){

  $('.all-history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      },
    ]
  });

});
