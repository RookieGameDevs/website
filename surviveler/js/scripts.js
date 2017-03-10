$(document).ready(function () {
  var random = Math.floor(Math.random()*$('blockquote').length);
  $('blockquote').eq(random).addClass('visible');
});