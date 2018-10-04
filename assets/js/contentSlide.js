jQuery(function ($) {
    
    // hide all texts when page loads
  
   $('p.slideText1').hide();
   $('p.slideText2').hide();
   $('p.slideText3').hide();
   $('p.slideText4').hide();
    
    
    
    
    // first slide
   $('.slideText1').css({"transition":"all 0.5s"});
    
    $('.special1').mouseover(function () {
         $('h4.slideText1').css({"top":"45%"});                     
        $('img.servImg1').css({"transform": "scale(1.5,1.5)"});
        $('img.servIcons1').css({"top":"12%"});
      
    });
    
    $('.special1').mouseout(function () {
        $('h4.slideText1').css({"top":"60%"});
        $('img.servImg1').css({"transform": "scale(1,1)"});      
        $('img.servIcons1').css({"top":"20%"});
    });
   
    
        // Second slide
    
$('.slideText2').css({"transition":"all 0.5s"});
    
  $('.special2').mouseover(function () {
         $('h4.slideText2').css({"top":"45%"});                
        $('img.servImg2').css({"transform": "scale(1.5,1.5)"});
        $('img.servIcons2').css({"top":"12%"});
      
    });
    
    $('.special2').mouseout(function () {
        $('h4.slideText2').css({"top":"60%"});
        $('img.servImg2').css({"transform": "scale(1,1)"});      
        $('img.servIcons2').css({"top":"20%"});
    });
    
    
    
        // Third slide
   $('.slideText3').css({"transition":"all 0.5s"});
    
  $('.special3').mouseover(function () {
         $('h4.slideText3').css({"top":"45%"}); 
                   
        $('img.servImg3').css({"transform": "scale(1.5,1.5)"});
        $('img.servIcons3').css({"top":"12%"});
      
    });
    
    $('.special3').mouseout(function () {
        $('h4.slideText3').css({"top":"60%"});
        $('img.servImg3').css({"transform": "scale(1,1)"});      
        $('img.servIcons3').css({"top":"20%"});
    });
    
    
    
    
        // Fourth slide
   $('.slideText4').css({"transition":"all 0.5s"});
    
  $('.special4').mouseover(function () {
         $('h4.slideText4').css({"top":"45%"});  
                  
        $('img.servImg4').css({"transform": "scale(1.5,1.5)"});
        $('img.servIcons4').css({"top":"12%"});
      
    });
    
    $('.special4').mouseout(function () {
        $('h4.slideText4').css({"top":"60%"});
        $('img.servImg4').css({"transform": "scale(1,1)"});      
        $('img.servIcons4').css({"top":"20%"});
    });
    
    
   
    
});
