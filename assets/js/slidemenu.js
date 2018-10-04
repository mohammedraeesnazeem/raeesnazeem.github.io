jQuery(function($) {   
      $("#toggleBtn").on("click", function () {
        $(this).toggleClass("active");
  });
				   
    $('#toggleBtn').click(function(){
    $('.side-collapse').toggleClass('in');
    $('.side-collapse-container').toggleClass('out');
    $('.head-collapse-container').toggleClass('out');
 
                
            });
    
    
        $("#follow #toggleBtn1").on("click", function () {
        $(this).toggleClass("active");
  });
    
     $('#follow #toggleBtn1').click(function(){
    $('.shrink.side-collapse').toggleClass('in');
    $('.shrink.side-collapse-container').toggleClass('out');
    $('.shrink.head-collapse-container').toggleClass('out');
 
                
            });
		
    
        });
