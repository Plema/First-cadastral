$(document).ready(function(){

  $( ".big-filter" ).click(function(event) {
    var attrPart = $(this).data('part');
    var textPart = $(this).text();
    var tp2 = textPart.substring(0, textPart.length - 2);
    $('.third-cr-work').html(tp2)

    $(".left-filter > ul").removeClass('open-list')
    $(this).parent().addClass('open-list')

    $('.all-c > .part').removeClass('active-part')
    $('.all-c').find('.'+attrPart).addClass('active-part');
  });

  $( ".hidden-list > li" ).click(function(event) {
    $(".hidden-list > li").removeClass('act-blue-li')
    $(this).addClass('act-blue-li')
    var attrPart = $(this).data('part');
    var tp2 = $(this).text();
    $('.third-cr-work').html(tp2)

    $('.all-c > .part').removeClass('active-part')
    $('.all-c').find('.'+attrPart).addClass('active-part')
  });

  $( document ).on('click','.click-span', function() {
    $('.part').removeClass('active-part')
    $('.one-page').addClass('active-part')
    console.log('win')
  });


   function windowSize(){
    if ($(window).width() < '768'){

    $('.slider-etaps').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.prev-etap'),
      nextArrow: $('.next-etap'),
    });

    } else if($(window).width() < '1280'){
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
        $('.swiper-objact').slick({
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
        $('.swiper-urus').slick({
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
       
    $('.two-links').slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
    });

    $( ".big-filter" ).click(function(event) {
      var attrPart = $(this).data('part');
      var textPart = $(this).text();
      var tp2 = textPart.substring(0, textPart.length - 2);
      $('.third-cr-work').html(tp2)
  
      $(".left-filter > ul").removeClass('open-list')
      $(this).parent().addClass('open-list')
  
      $('.all-c > .part').removeClass('active-part')
      $('.all-c').find('.'+attrPart).addClass('active-part');
      $('.swiper-zemlya').slick('refresh');
      $('.swiper-objact').slick('refresh');
      $('.swiper-urus').slick('refresh');
    });

    }
  }
  $(window).on('load resize',windowSize);

  $('.slider-similar-serv').slick({
    slidesToShow: 3, 
    arrows: true,  
    dots: false,
    infinite: true,
    prevArrow: $('.prev-serv'),
    nextArrow: $('.next-serv'),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
   });

   $('.slider-clients').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
    prevArrow: $('.prev-client'),
    nextArrow: $('.next-client'),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 5,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });

   $('.slider-sertificat').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev-sert'),
    nextArrow: $('.next-sert'),
  });

});