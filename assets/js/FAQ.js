$(document).ready(function(){

  $( ".tabs-faq > p" ).click(function(event) {
    $('.tabs-faq > p').removeClass('active-tab-faq');
    $(this).addClass('active-tab-faq');
  });

  $( ".title" ).click(function(event) {
    // $('.one-quest').removeClass('open-quest');
    $(this).parent().toggleClass('open-quest');
  });

});
