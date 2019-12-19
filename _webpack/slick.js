import 'slick-carousel';

const init = $(function() {

  /* Carousel */
  let $slick  = $('.slick-redant');

  if ($slick.length) {
    $slick.slick({
      lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
    });
  }

});

export default init;
