$(document).ready(function(){

  $( ".big-filter" ).click(function(event) {
    var attrPart = $(this).data('part');
    var textPart = $(this).text();
    var tp2 = textPart.substring(0, textPart.length - 2);
    $('.third-cr-work').html(tp2)

    $(".left-filter > ul").removeClass('open-list')
    $(this).parent().addClass('open-list')

    $('.all-c > .part').removeClass('active-part')
    $('.all-c').find('.'+attrPart).addClass('active-part')
  });


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
    } 
  }
  $(window).on('load resize',windowSize);





});