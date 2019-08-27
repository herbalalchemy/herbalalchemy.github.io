$(document).ready(function() {
  //sustainability-detail switching
  $("#sustainability-symbols-nav li").on("click", function(){
    var selected = this.classList[0]

    $("#sustainability-symbols-nav > li.selected").removeClass("selected");
    $(this).addClass("selected");

    $("#sustainability-information").removeClass("hidden");
    $("#sustainability-information .additional-information").children().addClass('hidden');
    $("#sustainability-information #"+selected+"-details").removeClass("hidden");
  })
});
