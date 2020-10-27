$(document).ready(function(){


  if ($(window).width() >= '768'){
    var scrTop = $(window).scrollTop();
    if(scrTop > 0){
      $('.header').addClass('fixed-header');
    }
    else{
      $('.header').removeClass('fixed-header');
    }
    
    $(window).scroll(function() {
      var scrTop = $(window).scrollTop();
      if(scrTop > 0){
        $('.header').addClass('fixed-header');
      }
      else{
        $('.header').removeClass('fixed-header');
      }  
    });
  }

  $( ".top-social" ).click(function(event) {
    $('.hidden-social').toggleClass('open-social');
  });

  $( ".burg-menu" ).click(function(event) {
    $('.burg-menu').toggleClass('open-burg-menu');
    $('nav').toggleClass('open-nav');

  });

});



