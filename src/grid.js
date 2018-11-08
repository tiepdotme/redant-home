import Parallax from 'parallax-js';
import Macy from 'macy';

const init = $(function() {
  function init() {
    $('.parallax-container').each(function() {
      var parallaxInstance = new Parallax(this, {
        relativeInput: true
      });
    });

    var macyInstance = Macy({
      container: '#macy-container',
      columns: 3,
      margin: 20,
      breakAt: {
        700: {
          columns: 2
        }
      }
    });
  }

  init();
});

export default init;
