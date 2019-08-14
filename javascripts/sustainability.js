$(document).ready(function() {
  //sustainability-detail switching
  $("#sustainability-symbols-nav li").on("click", function(){
    var selected = this.classList[0]

    $("#sustainability-symbols-nav > li.selected").removeClass("selected");
    $(this).addClass("selected");

    $("#sustainability-detail-wrap").children().addClass('hidden');
    $("#sustainability-detail-wrap #"+selected+"-details").removeClass("hidden");
  })
});
