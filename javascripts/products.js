$(document).ready(function() {
  //product-detail switching
  $("#product-symbols-nav li").on("click", function(){
    var selected = this.classList[0]

    $("#product-symbols-nav > li.selected").removeClass("selected");
    $(this).addClass("selected");

    $("#product-information").removeClass('hidden');
    $("#product-information .additional-information").children().addClass('hidden');
    $("#product-information #"+selected+"-product-details").removeClass("hidden");
  });

  $(".product-img-wrapper").on("click hover", function(){
    $(this).children().toggle();
  });
});
