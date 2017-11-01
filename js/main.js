$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	margin: 20,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  	autoplayHoverPause: true,
  	center: true,
  	nav: true,
  	navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"]
  });

  $('.swipebox').swipebox({
  	useCSS : true,
  	useSVG : true
  });
});