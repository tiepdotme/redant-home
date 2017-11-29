import 'slick-carousel';
import 'ekko-lightbox';

import AOS from 'aos';

const init = $(function() {
  var overlay_selector = '.nav-overlay';
  var toggle_selector = '.nav-toggle-icon';

  $(toggle_selector + ', .nav-links').click(function() {
    $(overlay_selector).toggleClass('open');
  });

  $(window).resize(function() {
    AOS.refresh();
  });

  function init() {
    $('.carousel').slick({
      dots: true,
      appendDots: '.carousel-dots'
    });

    AOS.init({
      dataAosAnchorPlacement: 'center-bottom',
      easing: 'ease-in-out'
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox({
        alwaysShowClose: true,
        leftArrow: '<i class="fa fa-chevron-left"></i>',
        rightArrow: '<i class="fa fa-chevron-right"></i>',
      });
    });
  }

  init();
});

export default init;
