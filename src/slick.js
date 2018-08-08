import 'slick-carousel';

const init = $(function() {

  /* Carousel */
  $('.slick-redant').slick({
    lazyLoad: 'ondemand',
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
  });

  init();
});

export default init;
