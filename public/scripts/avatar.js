(function ($) {
  "use strict";

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
    if (!node ) return;
    node.addEventListener('click', function () {
      var checkmark = node.getElementsByClassName('checkmark')[0];
      if ( !checkmark ) {
        addCheckmark(node);
        location.href = '/introduction';
      } else {
        node.removeChild(checkmark);
      }
    });
  });

  function addCheckmark (node) {
    var checkmark = document.createElement('DIV');
    checkmark.classList.add('checkmark');
    node.appendChild(checkmark);
  }

})(jQuery);
