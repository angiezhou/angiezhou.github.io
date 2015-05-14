$(document).ready(function(){
	$('.carousel').carousel({
	});

	$('.event-item').on({
		mouseenter:function(e){
			e.preventDefault();
			var $detail=$(this).find('.detail');
			$detail.fadeIn();
		},
		mouseleave:function(e){
			e.preventDefault();
			var $detail=$(this).find('.detail');
			$detail.fadeOut();
		}
	});
});
