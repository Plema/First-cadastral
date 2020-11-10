window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$(document).ready(function(){

  $('.arrow-to-top').fadeIn();
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


  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.arrow-to-top').fadeIn();
    } else {
      $('.arrow-to-top').fadeOut();
    }
  });

  
  $( ".close-pop" ).click(function(event) {
    $('.pop-up').removeClass('open-pop-up');
    $('.back-dark').removeClass('open-back-dark');
    $('body').css('overflow-y','auto');
  });

  
  $( ".back-dark" ).click(function(event) {
    $('.pop-up').removeClass('open-pop-up');
    $('.back-dark').removeClass('open-back-dark');
    $('body').css('overflow-y','auto');
  });

  
  $( ".open-politic").click(function(event) {
    $('.politic-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });

  
  $( ".open-call").click(function(event) {
    $('.call-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });

  
  $( ".open-consult").click(function(event) {
    $('.consult-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });

  
  $( ".open-video").click(function(event) {
    $('.video-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });

  
  $( ".open-thank").click(function(event) {
    event.preventDefault()
    $('.pop-up').removeClass('open-pop-up');
    $('.thank-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });
  
  $( ".open-thank-review").click(function(event) {
    event.preventDefault()
    $('.pop-up').removeClass('open-pop-up');
    $('.thank-review-pop').addClass('open-pop-up');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow-y','hidden');
  });
  

  // $( ".click-ol > li > a").click(function(event) {
  //   var attrCompany = $(this).data('datacompany');
  //   console.log(attrCompany)
  //   location.hash = '#' + attrCompany;
  // });

});



