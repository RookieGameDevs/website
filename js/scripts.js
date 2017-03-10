$(document).ready(function () {
  $('.member .header').click(function () {
    var expanded = $(this).parent().hasClass('expanded');
    $('.member').removeClass('expanded');
    if (!expanded) {
      $(this).parent().addClass('expanded');
    }
  });

  var random = Math.floor(Math.random()*$('blockquote').length);
  $('blockquote').eq(random).addClass('visible');
});