$(document).ready(function() {
  $("#t").hover(
      function () {
        $(this).find('ul>li').show(300);
      },
      function () {
        $(this).find('ul>li').hide(600);
      }
    );

});
