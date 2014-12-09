
//Video galery media query------------------------------

$(document).ready(function(){

	var $allVideos = $("iframe[src^='http://www.youtube.com/embed/M93slbgla7Y', 'http://www.youtube.com/embed/06CGSSxD0nw','http://www.youtube.com/embed/iFYqcr6Amfo', 'http://www.youtube.com/embed/VH87UIg0A8w','http://www.youtube.com/embed/xY8cBJlvc8Y']"),

	    $fluidEl = $("info");

	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			.removeAttr('height');
			.removeAttr('width');

	});

	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});

	}).resize();
	

//----------------Photo Gallery------------------------------------------
var ht= $("img").height(),
    wd=$("img").width(),
    mult=1.5; //change to the no. of times you want to increase your image  
              //size.

$("img").on('mouseenter', function(){
    $(this).animate({height: ht*mult,
                     width: wd*mult}, 500);
});
$("img").on('mouseleave', function(){
    $(this).animate({height: ht,
                     width: wd}, 500);
});

});

