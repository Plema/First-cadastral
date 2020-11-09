$(document).ready(function(){


   function windowSize(){
    if ($(window).width() <= '1280'){
      $('.swiper-zemlya').slick({
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
    } else {
        console.log('big-ekran')
    }
  }
    $(window).load(windowSize); // при загрузке
    $(window).resize(windowSize); // при изменении размеров
    $(window).on('load resize',windowSize);
});