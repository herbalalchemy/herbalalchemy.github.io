$(document).ready(function() {
  var defaultBackgroundColor = $('html').css("background-color");

  // log the screen width on resize
  window.onresize = function(event) {
    console.log("window width: "+$(window).width()+"px");
  };

  // track clicks of any element with ga-track class
  $('.ga-track').on('click', function() {
    var name = this.getAttribute('data-tracker') || $(this).text() || this.value

    console.log("click registered: "+name)

    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'click-'+name
    });
  });
});

goToPage = function(path){
  // update urls when clicking a link
  // github pages use a frameset which is fucked, that's the short version.
  top.window.location.href = path
}
