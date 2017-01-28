$(document).ready(function() {

  $('html').on('click', '.grid-item img', function(e) {
    e.preventDefault
    $('.action-modal').toggleClass('hidden');
  });

});
