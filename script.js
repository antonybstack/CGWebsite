// using 2 jquery Widget effects
$(document).ready(function() {
  $("#t").hover(
    function() {
      $(this).find('ul>li').show(300);
    },
    function() {
      $(this).find('ul>li').hide(600);
    }
  );


  // jQuery plugin
  if ($(".slideshow").length) {
    $('.slideshow').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 1500
    });
  }

  // jQuery UI Widget
  if ($("#accordion").length) {
    $('#accordion').accordion({
      active: false,
      collapsible: true
    });
  }
});
