/* Scroll to new_pos in scroll_Time ms */
function scroll_To(new_pos, scroll_Time) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop:$(new_pos).offset().top
	}, scroll_Time);
};

/* Runs after page is loaded */
function main() {
	/* close menu - push back */
	$('.icon-close').click(function() {
		$('.menu').animate({left: "-200px"}, 200);
		$('body').animate({left: "0px"}, 200);
	});
	menuStat=false;
	/* menu icon  */
	$('.icon-menu').click(function() {
		/* menu status open - push back */
		if(menuStat==true) {
			$('.menu').animate({left: "-200px"}, 200);
			$('body').animate({left: "0px"}, 200);
			menuStat=false;
		}else{
			$('.menu').animate({left: "0px"}, 200);
			$('body').animate({left: "200px"}, 200);
			menuStat=true;
		};
	});
	
	$(document).keydown(function(event) {
		/* arrow down */
		if(event.which==40) {
//			$('html, body').animate({scrollTop:$('.active-page').offset().top},1000);
//			scrollTo('.active-page', 1000);
//			nextPage=$('.active-page').next();
//			$('.active-page').removeClass('active-page');
//			nextPage.addClass('active-page');
		};
	});


	/* Scroll through sections */
	$('#abt').click(function() {scroll_To('#abth',1000)});
	$('#exp').click(function() {scroll_To('#exph',1000)});
	$('#att').click(function() {scroll_To('#atth',1000)});
	$('#ctm').click(function() {scroll_To('#ctmh',1000)});
	$('#btt').click(function() {scroll_To('.jumbotron',1000)});




};

$(document).ready(main);