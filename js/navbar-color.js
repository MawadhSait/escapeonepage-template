
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".bg-change").css("background" , "rgb(126, 153, 207)");
          $(".bg-change").css('box-shadow', '1px 1px 1px #888');

        }
  
        else{
            $(".bg-change").css("background" , "");  	
            $(".bg-change").css('box-shadow', '0px 0px 0px #888');
        }
    })
  })
  