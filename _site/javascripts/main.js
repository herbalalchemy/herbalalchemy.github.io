$(document).ready(function() {
  var defaultBackgroundColor = $('html').css("background-color");

  // log the screen width on resize
  window.onresize = function(event) {
    console.log("window width: "+$(window).width()+"px");
  };

  $(".tab-button").on("click", function(){
    var selected = $(this).attr('id').replace('-button', '');

    // clear 'selected' and designate the currently selected tab-button
    $("#nav>li.selected").removeClass("selected");
    $(this).addClass("selected");

    // hide all tabs and show the selected tab
    $(".tab").hide();
    $("#"+selected).show();

    // change the background color to match the selected element
    changeBackgroundColor(selected, defaultBackgroundColor);
    rotateSeal(selected);
  });
});

function changeBackgroundColor(selected, defaultBackgroundColor) {
   var color = colorForPlanet(selected, defaultBackgroundColor);
   $('html').css({
     "background-color": color,
     "-webkit-transition": "background 2s ease",
     "-moz-transition": "background 2s ease",
     "-ms-transition": "background 2s ease",
     "-o-transition": "background 2s ease",
     "transition": "background 2s ease"
   });
}

function rotateSeal(selected) {
  var updatedLogoRotation = logoRotation(selected);
  $('#logo').css({
    'transform': 'rotate('+updatedLogoRotation+'deg)',
     "-webkit-transition": "all 2s ease",
     "-moz-transition": "all 2s ease",
     "-ms-transition": "all 2s ease",
     "-o-transition": "all 2s ease",
     "transition": "all 2s ease"
  });
}

function colorForPlanet(selected, defaultBackgroundColor) {
  switch(selected){
    case 'mercury':
      return '#8a7e57';
      break;
    case 'venus':
      return '#548a63';
      break;
    case 'luna':
      return '#666';
      break;
    default: return defaultBackgroundColor;
  }
}

function logoRotation(selected) {
  switch(selected){
    case 'mercury':
      return '103'
      break;
    case 'venus':
      return '0';
      break;
    case 'luna':
      return '51';
      break;
    default: return '154';
  }
}

goToPage = function(path){
  // update urls when clicking a link
  // github pages use a frameset which is fucked, that's the short version.
  top.window.location.href = path
}
