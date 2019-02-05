$(document).ready(function(){
  $('.menu_link').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1500);
	return false;
})
});

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},1200);
 
});

//ниже чисто слик//

$(document).ready(function(){
  $('.slider-main').slick();
});

//анамация портфолио//
$('.card').on('click', function() {
    $('.container-portfolio').toggleClass('container-origin');
});


