$(document).ready(function(){

  
  $( ".tabs-news > p" ).click(function(event) {
    $(".tabs-news > p").removeClass('active-tab-news')
    $(this).addClass('active-tab-news');
  });

});
