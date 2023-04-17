$(".top-slider .side-bars > div").click(function () {
  var $clicked_button = $(this);
  var $slider = $clicked_button.closest(".top-slider");
  var $slides = $slider.find(".slides");
  var $now_slider = $slides.find(".active");
  var $next_slider = null;

  if ($clicked_button.hasClass("left")) {
    $next_slider = $now_slider.prev();
  } else if ($clicked_button.hasClass("right")) {
    $next_slider = $now_slider.next();
  }

  $now_slider.removeClass("active");
  $next_slider.addClass("active");
});
