$(function() {
  var showcase = $("#showcase");

  showcase.Cloud9Carousel({
    yPos: 42,
    yRadius: 50,
    farScale: 0.5,
    buttonLeft: $(".carousel__nav > .carousel__button--left"),
    buttonRight: $(".carousel__nav > .carousel__button--right"),
    autoPlay: true,
    bringToFront: true,

    onRendered: showcaseUpdated,
    onLoaded: function() {
      showcase.css("visibility", "visible");
      showcase.css("display", "none");
      showcase.fadeIn(1500);
    }
  });

  function showcaseUpdated(showcase) {
    var title = $("#item-title").html($(showcase.nearestItem()).attr("alt"));

    var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI);
    title.css("opacity", 0.5 + 0.5 * c);
  }

  $(".carousel__nav > .carousel__button").click(function(e) {
    var b = $(e.target).addClass("down");
    setTimeout(function() {
      b.removeClass("down");
    }, 80);
  });

  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 37:
        $(".carousel__nav > .carousel__button--left").click();
        break;

      case 39:
        $(".carousel__nav > carousel__button--right").click();
    }
  });
});
