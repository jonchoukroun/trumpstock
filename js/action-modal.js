$(document).ready(function() {

  $('html').on('click', '.image-grid img', function(e) {
    e.preventDefault
    $('.action-modal').toggleClass('hidden');
  });

});
