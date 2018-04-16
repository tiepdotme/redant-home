import 'slick-carousel';

import AOS from 'aos';

const init = $(function() {
  var carousel_selector = '.carousel';
  var overlay_selector = '.nav-overlay';
  var toggle_selector = '.nav-toggle-icon';

  /* Nav menu */
  $(toggle_selector + ', .nav-links').click(function() {
    $(overlay_selector).toggleClass('open');
  });

  /* AOS */
  $(window).resize(function() {
    AOS.refresh();
  });

  AOS.init({
    dataAosAnchorPlacement: 'center-bottom',
    easing: 'ease-in-out',
    duration: 900,
    disable: 'mobile'
  });

  /* Carousel */
  $(carousel_selector).slick({
    dots: true,
    appendDots: '.carousel-dots',
    appendArrows: '.carousel-arrows',
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1
  });

  $('#gallery-modal').on('shown.bs.modal', function (e) {
    var $carousel = $(this).find(carousel_selector);
    var index = $(e.relatedTarget).data('index');
    $carousel.resize();

    if (index) {
      $carousel.slick('slickGoTo', index - 1);
    }
  });
});

export default init;
