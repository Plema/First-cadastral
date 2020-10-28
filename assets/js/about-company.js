$(document).ready(function(){

  
  $( ".tabs-company > li" ).click(function(event) {
    var attr1 = $(this).data('tab');
    var text1 = $(this).text();
    console.log(attr1)

    $('.fourth-crumb').css('display','none')

    $('.third-crumb > a').html(text1)
    $(".tabs-company > li").removeClass('active')
    $(this).addClass('active');
    $('.one-tab').removeClass('active-tab');
    $('main').find('.' + attr1).addClass('active-tab')

    if( $('#review-tab').hasClass('active-tab') ){
      $('.fourth-crumb').css('display','block')
    }

  });

  
  $( ".phis-ur-tab > p" ).click(function(event) {
    var attr2 = $(this).data('review');
    var text2 = $(this).text();

    $('.fourth-crumb > a').html(text2)

    $(".phis-ur-tab > p").removeClass('active-phis-ur-tab')
    $(this).addClass('active-phis-ur-tab');

    $('.in-rev-tab').removeClass('active-rev-tab');
    $('.tab3').find('.' + attr2).addClass('active-rev-tab')

  });


  
  $( ".open-text-review" ).click(function(event) {

    $(this).parent().parent().find('.hidden-text').addClass('show-hidden-text')

  });
  
  $( ".close-hidden-text" ).click(function(event) {

    $(this).parent().parent().removeClass('show-hidden-text')

  });

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
