(function($) {
    $('.item-transition').on('click', function() {
       $(this).toggleClass('active');
    });
    
    $('.item-animation').on('click', function() {
       if($(this).hasClass('active-in')) {
          $(this).removeClass('active-in');
          $(this).addClass('active-out');
       } 
         else {
          $(this).removeClass('active-out');
          $(this).addClass('active-in');
       }
    });
 })(jQuery);


