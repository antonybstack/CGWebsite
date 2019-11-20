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


    console.log(document.getElementById("pc").checked);
    console.log($("xbox").prop("checked", true));
    console.log($("psn").prop("checked", true));



  function splitValue(value, index) {
    return value.substring(0, index) + "," + value.substring(index);
}

console.log(splitValue("3123124", 2));

  $('#target').submit(function(event){
    event.preventDefault();
    var gamertag = $('#texty').val();

    $("#data").html(html);
      var html = "";
      if(document.getElementById("xbox").checked){
      // xbox
      var url = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/xbl/gamer/m45pro/profile/type/mp';
    }
      if(document.getElementById("pc").checked){
      // pc
      var url2 = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/Gorapter5%231216/profile/type/mp';}
      if(document.getElementById("psn").checked){
      // pc
      var url3 = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/psn/gamer/reidboyy/profile/type/mp';}

    //ajax for call of duty api
    $.ajax({
      type: 'POST',
      url: url2,
      beforeSend: function() {
        $("#data").html("Loading...");
      },
      timeout: 10000,
      error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
      },
      dataType: "json",
      success: function(data) {
        console.log(data.data.lifetime);
        html += "<h3>Username: " + data.data.username + "</h3>";
        html += "<h3>Level: " + data.data.level + "</h3>";
        html += "<h3>kdRatio: " + data.data.lifetime.all.properties.kdRatio + "</h3>";
        html += "<h3>Score Per Game: " + data.data.lifetime.all.properties.scorePerGame + " points</h3>";
        html += "<h3>Win Rate: " + (data.data.lifetime.all.properties.wins / (data.data.lifetime.all.properties.wins + data.data.lifetime.all.properties.losses)) + "%</h3>";
        html += "<h3>headshot rate: " + (data.data.lifetime.all.properties.headshots / data.data.lifetime.all.properties.kills) + "%</h3>";
        html += "<h3>bestKillStreak: " + data.data.lifetime.all.properties.bestKillStreak + "</h3>";



        $("#data").html(html);
      }
    });
  });



  // $.ajax({
  //     url: url,
  //     headers: {
  //         'Authorization':'ggokdwypstlv14p0lfgqvujzinqndy',
  //     },
  //     method: 'POST',
  //     dataType: 'json',
  //     data: YourData,
  //     success: function(data){
  //       console.log('succes: '+data);
  //     }
  //   });

});
