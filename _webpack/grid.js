import Macy from 'macy';

const init = $(function() {
  function init() {
    if ($('#macy-container').length) {
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
  }

  init();
});

export default init;
