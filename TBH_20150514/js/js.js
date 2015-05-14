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
	$('.numberBox .countMinus').click(function(){
		var count = parseInt($(this).siblings("h2").html());
		if(count > 1){
			$(this).siblings("h2").html(--count);
		}

		return false;
	});

	$('.numberBox .countPlus').click(function(){
		var count = parseInt($(this).siblings("h2").html());
		$(this).siblings("h2").html(++count);

		return false;
	});
});
