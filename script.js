// using 2 jquery Widget factory effects
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
    console.log("bye");
    $('#accordion').accordion({
      active: false,
      collapsible: true
    });
  }
});
