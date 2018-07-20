$('span').addClass('hide');

$('td').on('mouseover',function(e){
	$(this)
		.find('.hide')
		.removeClass('hide');
});

$('td').on('mouseout',function(e){
	$(this)
		.find('span')
		.delay(2000)
		.addClass('hide');
});
	

