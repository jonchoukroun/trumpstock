$(document).ready(function() {
  $('.form-group').on('keypress', 'input', function(e) {
    e.preventDefault();
    if (e.which === 13) {
      document.location.href = './empty_search.html';
    }
  });
});
