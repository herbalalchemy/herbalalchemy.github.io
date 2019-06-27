$(document).ready(function() {
  var defaultBackgroundColor = $('html').css("background-color");

  // log the screen width on resize
  window.onresize = function(event) {
    console.log("window width: "+$(window).width()+"px");
  };

  // nav switching
  $(".tab-button").on("click", function(){
    var selected = $(this).attr('id').replace('-button', '');

    // convert to secondary page style on initial nav click
    // hide initally visible large logo
    $("#header-wrap").hide();
    // convert nav styling
    $("#nav-wrap").addClass('top-nav-bar');

    // clear 'selected' and designate the currently selected tab-button
    $("#nav>li.selected").removeClass("selected");
    $(".sub-nav>li.selected").removeClass("selected");
    $(this).addClass("selected");

    // hide all tabs and show the selected tab
    $(".tab").hide();
    $("#"+selected).show();

    // show sub-navigation if relevant
    if($("#"+selected).hasClass("sub-navigable")) {
      $("#"+selected+"-sub-nav").show(); // show the sub-nav of element
      // automatically select the first sub-nav
      var firstSubNav = $("#"+selected+"-sub-nav").children().first();
      firstSubNav.addClass("selected");
      // automatically display the first sub-tab
      var firstSubTab = $("#"+selected).next();
      firstSubTab.show();
    } else if($("#"+selected).hasClass("sub-tab")) {
      // re-select the parent nav button to clarify sub-nav origin
      var parentNavButton = this.parentNode.id.replace('sub-nav', 'button');
      $("#"+parentNavButton).addClass("selected");
    } else {
      $(".sub-nav").hide();
    };
  });
});

goToPage = function(path){
  // update urls when clicking a link
  // github pages use a frameset which is fucked, that's the short version.
  top.window.location.href = path
}
