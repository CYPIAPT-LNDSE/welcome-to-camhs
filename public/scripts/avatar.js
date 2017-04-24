(function ($) {
  'use strict';

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  [
    'lion',
    'bear',
    'monkey'
  ].forEach(function (avatar) {
    var node = document.getElementsByClassName(avatar)[0];
    var timeout;
    if (!node ) return;
    node.addEventListener('click', function () {
      app.animateCheckmark();
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        window.location.href = 'introduction';
      }, 1500);
    });
  });

})(jQuery);
