$(document).ready(function(){
  
  function resizeScrenn() {
    if ($(window).width() < 1024) {
        var SwiperAdv = new Swiper('.slider-advantages', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: false,
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination-adv',
        },
      });
    } else {
        SwiperAdv.destroy(); // или swiper.autoplay.stop();
    }
}

resizeScrenn();

$(window).resize(function () {
    resizeScrenn();
});


});



