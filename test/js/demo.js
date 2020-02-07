/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#67c3d1',
    lineColor: '#67c3d1'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});