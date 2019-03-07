import Macy from 'macy';

const init = $(function() {
  function init() {
    if ($('#macy-container').length) {
      var columns = $('#macy-container').data('columns');
      var columnsSmall = $('#macy-container').data('columns-small');
      var macyInstance = Macy({
        container: '#macy-container',
        columns: columns,
        margin: 20,
        breakAt: {
          700: {
            columns: columnsSmall
          }
        }
      });
    }
  }

  init();
});

export default init;
