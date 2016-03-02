jQuery(function(){
	jQuery(window).scroll(function(){
		var offsetX = $('html').offset().top;
		console.log(offsetX);
		if(offsetX < 0){
			jQuery('#logoArea > h1').fadeOut();
		}else{
			jQuery('#logoArea > h1').fadeIn();
		}
	});
});