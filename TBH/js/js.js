$('.carousel').carousel({
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
