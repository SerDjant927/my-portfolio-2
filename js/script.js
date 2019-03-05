//анимация c хедера к элементам//
$(document).ready(function(){
  $('.menu_link').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1200);
	return false;
})
});


//анимация ссылки из текста на портфолио//
$(document).ready(function(){
  $('.about-link').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1200);
	return false;
})
});

//анимация кнопок наверх//
$(document).ready(function(){
  $('.topbtn').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1200);
	return false;
})
});



//анамация портфолио//
$('.card').on('click', function() {
    $('.container-portfolio').toggleClass('container-origin');
});



