 $(function(){
 	$(window).scroll(function(event) {
 		vitri= $('body').scrollTop();
 		if(vitri>90){
 			$('.navbar').addClass('bienhinh') 							
 		}
 		else if(vitri<90){
 			$('.navbar').removeClass('bienhinh')	
 		}
 	});

 	$('.nav-item.btn.btn-outline-secondary.datbanmenu').click(function(event) {
 		$('.datban').addClass('datban hienlen')
 		$('.den').addClass('den hienlen')
 		$('.nav-item.btn.btn-outline-secondary.datbanmenu').addClass('active1')
 	});
 	$('.nutx,.den').click(function(event) {
 		$('.datban').removeClass('hienlen')
 		$('.den').removeClass('hienlen')
 		$('.nav-item.btn.btn-outline-secondary.datbanmenu').removeClass('active1')
 	}); 
 	$(document).keyup(function(e) {  
  		if (e.keyCode === 27){
  				$('.datban').removeClass('hienlen')
 		$('.den').removeClass('hienlen')
 		$('.nav-item.btn.btn-outline-secondary.datbanmenu').removeClass('active1')
  		}   // esc
});		
})  

