$(document).ready(function(){

  $( ".tabs-faq > p" ).click(function(event) {
    $('.tabs-faq > p').removeClass('active-tab-faq');
    $(this).addClass('active-tab-faq');
  });


});