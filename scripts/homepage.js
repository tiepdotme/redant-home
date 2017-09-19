$(function() {
  var overlay_selector = '.nav-overlay';
  var toggle_selector = '.nav-toggle-icon';

  $(toggle_selector + ', .open' + overlay_selector).click(function() {
    $(overlay_selector).toggleClass('open');
  });

  function init() {}

  init();
});
