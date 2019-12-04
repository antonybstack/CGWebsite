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
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2500
    });
  }

  // jQuery UI Widget
  if ($("#accordion").length) {
    $('#accordion').accordion({
      active: false,
      collapsible: true
    });
  }

  //whenever radio button is clicked, the necessary input elements are populated to the form based on the platform selected
  $("input[id='xbox']").change(function() {
    var htmlXbox = "";
    htmlXbox += "gamertag: <input id='gamertag' type='text' name='gamertag' value='m45pro'><br>";
    htmlXbox += "<input id='sub' type='submit' value='Submit'><br>";
    $("#inputArea").html(htmlXbox);
  });

  $("input[id='psn']").change(function() {
    var htmlXbox = "";
    htmlXbox += "gamertag: <input id='gamertag' type='text' name='gamertag' value='reidboyy'><br>";
    htmlXbox += "<input id='sub' type='submit' value='Submit'><br>";
    $("#inputArea").html(htmlXbox);
  });

  $("input[id='pc']").change(function() {
    var htmlXbox = "";
    htmlXbox += "gamertag: <input id='gamertag' type='text' name='gamertag' value='Gorapter5'>";
    htmlXbox += "#<input id='blizzardtag' type='text' name='blizzardtag' value='1216'><br>";
    htmlXbox += "<input id='sub' type='submit' value='Submit'><br>";
    $("#inputArea").html(htmlXbox);
  });

  //takes input from user and populates gamertag
  $('#target').submit(function(event) {
    event.preventDefault();
    if (document.getElementById("pc").checked) {
      var gamertag = $('#gamertag').val();
      var blizzardtag = $('#blizzardtag').val();
      gamertag = gamertag + "%23" + blizzardtag; //combines gamertag and blizzardtag, %23 is added between for the api call
    } else {
      var gamertag = $('#gamertag').val();
    }

    //determines the specific api to use based on the platform radio buttons
    if (document.getElementById("xbox").checked) {
      // xbox
      var url = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/xbl/gamer/' + gamertag + '/profile/type/mp';
    } else if (document.getElementById("pc").checked) {
      // pc
      var url = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/' + gamertag + '/profile/type/mp';
    } else if (document.getElementById("psn").checked) {
      // pc
      var url = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/psn/gamer/' + gamertag + '/profile/type/mp';
    }

    var html = ""; //create variable to hold all html that is created in the ajax function
    // ajax request #1
    // ajax for call of duty api
    $.ajax({
      type: 'POST',
      url: url,
      beforeSend: function() {
        $("#data").html("Loading...");
      },
      timeout: 10000,
      error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
      },
      dataType: "json",
      success: function(data) {
        html += "<p class='datap'>Username:&nbsp</p><p class='dataItem'>" + data.data.username + "</p><br>";
        html += "<p class='datap'>Level:&nbsp</p><p class='dataItem'>" + data.data.level + "</p><br>";
        html += "<p class='datap'>kdRatio:&nbsp</p><p class='dataItem'>" + data.data.lifetime.all.properties.kdRatio.toFixed(2) + "</p><br>";
        html += "<p class='datap'>Score Per Game:&nbsp</p><p class='dataItem'>" + data.data.lifetime.all.properties.scorePerGame.toFixed(2) + " points</p><br>";
        html += "<p class='datap'>Win Rate:&nbsp</p><p class='dataItem'>" + ((data.data.lifetime.all.properties.wins / (data.data.lifetime.all.properties.wins + data.data.lifetime.all.properties.losses)).toFixed(2)) + "%</p><br>";
        html += "<p class='datap'>headshot rate:&nbsp</p><p class='dataItem'>" + (data.data.lifetime.all.properties.headshots / data.data.lifetime.all.properties.kills).toFixed(2) + "%</p><br>";
        html += "<p class='datap'>bestKillStreak:&nbsp</p><p class='dataItem'>" + data.data.lifetime.all.properties.bestKillStreak + "</p>";
        $("#data").html(html);
      }
    });
  });

        
      // ajax request #2
  $.ajax({
      url: 'images.json',
      dataType: 'json',
      success: function(data) {
      console.log(data.images[0].image);
      html = "<img src=" + data.images[2].image +" alt=" + data.images[2].image + " height=100px>";
      $("#data").html(html);
      },
      statusCode: {
        404: function() {
          alert('There was a problem with the server. Try again soon!');
        }
      }
    });



}); //end ready
