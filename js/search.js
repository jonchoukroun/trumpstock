$(document).ready(function() {
  $('.form-group').on('keypress', 'input', function(e) {
    if (e.which === 13) {
      e.preventDefault();
      document.location.href = './empty_search.html';
    }
  });
});
