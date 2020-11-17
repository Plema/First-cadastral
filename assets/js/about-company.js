$(document).ready(function(){


  var url = window.location.hash.replace("#","");
  $('main').find('.' + url).addClass('active-tab')
  $('.fourth-crumb').css('display','none')
  var text2 = $('li[data-tab= ' + url + ' ]').text()
  console.log(text2);

  $('.third-crumb > a').html(text2)
  $(".tabs-company > li").removeClass('active')
  $('.' + url + '-class').addClass('active');
  $('.one-tab').removeClass('active-tab');
  $('main').find('.' + url).addClass('active-tab')

  if( url === "tab3" ){
    $('.fourth-crumb').css('display','block')

  } else if(url === "tab7"){
    $('.fourth-crumb').css('display','block')
    var text3 = $('.partn-ac').text();
    $('.fourth-crumb > a').html(text3)
  }

  $( ".tabs-company > li" ).click(function(event) {
    var attr1 = $(this).data('tab');
    var text1 = $(this).text();
 
    window.location.hash = attr1;
    $('.fourth-crumb').css('display','none')

    $('.third-crumb > a').html(text1)
    $(".tabs-company > li").removeClass('active')
    $(this).addClass('active');
    $('.one-tab').removeClass('active-tab');
    $('main').find('.' + attr1).addClass('active-tab')

    if( $('#review-tab').hasClass('active-tab') ){
      $('.fourth-crumb').css('display','block')

    } else if($('#part-ord').hasClass('active-tab')){

      $('.fourth-crumb').css('display','block')
      var text3 = $('.partn-ac').text();
      $('.fourth-crumb > a').html(text3)
    }
  });

  //Tab3 - review
  $( ".phis-ur-tab > p" ).click(function(event) {
    var attr2 = $(this).data('review');
    var text2 = $(this).text();

    $('.fourth-crumb > a').html(text2)

    $(".phis-ur-tab > p").removeClass('active-phis-ur-tab')
    $(this).addClass('active-phis-ur-tab');

    $('.in-rev-tab').removeClass('active-rev-tab');
    $('.tab3').find('.' + attr2).addClass('active-rev-tab')

  });

  //Tab7 - partners
  $( ".pertner-order-tab > p" ).click(function(event) {
    var attr4 = $(this).data('partord');
    var text4 = $(this).text();

    $('.fourth-crumb > a').html(text4)

    $(".pertner-order-tab > p").removeClass('activ-orp')
    $(this).addClass('activ-orp');

    $('.one-part-tab').removeClass('active-part');
    $('.tab7').find('.' + attr4).addClass('active-part')

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
