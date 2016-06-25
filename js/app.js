// The $ in front of the overlay is just a convention. Doesn't add anything to the code.
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#image-gallery-js a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// show image when clicked
	$image.attr("src", imageLocation);
	$overlay.show();
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

$overlay.click(function(){
	$overlay.hide();
});