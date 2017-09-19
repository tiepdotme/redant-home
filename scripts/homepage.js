$(function() {
  var overlay_selector = '.nav-overlay';
  var toggle_selector = '.nav-toggle-icon';

  $(toggle_selector + ', .nav-links').click(function() {
    $(overlay_selector).toggleClass('open');
  });

  function init() {
    $('.carousel').slick();
  }

  init();
});
