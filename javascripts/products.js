$(document).ready(function() {
  //product-detail switching
  $("#product-symbols-nav li").on("click", function(){
    var selected = this.classList[0]

    $("#product-symbols-nav > li.selected").removeClass("selected");
    $(this).addClass("selected");

    $("#product-detail-wrap").children().addClass('hidden');
    $("#product-detail-wrap #"+selected+"-product-details").removeClass("hidden");
  })
});
