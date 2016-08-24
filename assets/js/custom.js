$(document).ready(function(){ 

 // Device
  function responsive(){ 			
    var winWidth = $(window).width();

    if(winWidth >= 1024) { //tablet
			$('body').removeClass('iphone'); 
			$('body').removeClass('ipad'); 		
    }
    else if(winWidth <= 568){  //mobile
      $('body').addClass('iphone'); 
			$('body').removeClass('ipad');   
    }
		else if(winWidth >= 768 && winWidth <= 1024){  //mobile
      $('body').addClass('ipad');   
			$('body').removeClass('iphone');		
    }		
    else{  //desktop
		/*$('body').removeClass('iphone');*/
    }
  }

  responsive();

	$(window).resize(function(){
		responsive();
	});
	
});

 


