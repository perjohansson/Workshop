
$(document).ready(function(){
	
	//alert("IE 7");

	$('.img-block').each(function(index) {
		//alert($(this).width());

		$(this).siblings('.caption').css('width', $(this).width());
	});

});



