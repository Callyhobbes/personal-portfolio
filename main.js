(function($) {
  var selector = ".section";

  var $slides = $(selector);

  var currentSlide = 0;
  var isAnimating = false;

  var stopAnimation = function() {
    setTimeout(function() {
      isAnimating = false;
    }, 300);
  };

  var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
  };

  let currentPosition = [0, 0];
  let lastPosition = [0, 0];

  $('.navbar li').on('click', (e) => {
    lastPosition = [currentPosition[0], currentPosition[1]];
    let Y = (document.body.scrollTop || document.documentElement.scrollTop);
    currentPosition = [e.pageX, Y];
    console.log("click", currentPosition, lastPosition);
  })






  document.addEventListener(
    "wheel",
    function(event) {
      var $currentSlide = $($slides[currentSlide]);
      // lastPosition = [currentPosition[0], currentPosition[1]];
      let Y = (document.body.scrollTop || document.documentElement.scrollTop);
      currentPosition = [event.pageX, Y];
      console.log("wheel", currentPosition, lastPosition);
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      // var direction = -event.deltaY;
      var direction = currentPosition[1] - lastPosition[1];
      console.log(direction);
      if (direction < 0 || (lastPosition[1] === 0 && currentPosition[1] === 0)) {
        // next
        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide++;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      } if (direction > 0) {
        // back
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide--;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      }
    },
    { passive: false }
  );
})(jQuery);
