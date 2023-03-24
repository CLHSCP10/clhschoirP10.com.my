$(function() {
    var slider = $('.slider');
    var images = slider.find('img');
    var current = 0;
    
    function nextSlide() {
      current++;
      if (current >= images.length) {
        current = 0;
      }
      slider.animate({scrollLeft: current * slider.width()}, 500);
    }
    
    setInterval(nextSlide, 3000);
  });
  