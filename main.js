//------minimum------//
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

//------normal------//
$(function(){
	$('.calc__btn').on('click', function(){
		$('.result').val($('.result').val() + $(this).html());
	})

	$('.equal').on('click', function(){
		exp = $('.result').val();
		if (exp.includes('x')){
			exp=exp.replace('x', '*');
		}
		$('.result').val(eval(exp));
	})
	$('.clear').on('click', function(){
		$('.result').val('');
	})
	$('.back').on('click', function(){
		ex = $('.result').val();
		$('.result').val(ex.substring(0,ex.length -1));
	})

})

//------max------//






