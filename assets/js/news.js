$(document).ready(function(){

  
  $( ".tabs-news > p" ).click(function(event) {
    var attr1 = $(this).data('tabnew');
    $(".tabs-news > p").removeClass('active-tab-news')
    $(this).addClass('active-tab-news');
    $('.on-tabN').removeClass('active-tabN');
    $('.all-tabs-news').find('.' + attr1).addClass('active-tabN')
  });

});
