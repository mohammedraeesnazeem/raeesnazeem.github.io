(function($) {          
    $(document).ready(function(){ 
        
        $('#follow').hide();
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 350) {
                $('#follow').slideDown(100);
               
            } else {
                $('#follow').slideUp(100);
            }
        });
        
        
    });
})(jQuery);