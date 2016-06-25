// The $ in front of the overlay is just a convention. Doesn't add anything to the code.
var $overlay = $('<div id="overlay"></div>');
$("body").append($overlay);

$("#image-gallery-js a").click(function(event){
	event.preventDefault();
});