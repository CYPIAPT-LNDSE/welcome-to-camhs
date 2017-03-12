(function () {
  'use strict';

  if (document.querySelector('.personality')) {

    addPopClassOnClick('strange');
    addPopClassOnClick('happy');
    addPopClassOnClick('sad');
    addPopClassOnClick('boring');
    addPopClassOnClick('kind');
    addPopClassOnClick('angry');
    addPopClassOnClick('fun');
  }

  function addPopClassOnClick (selector) {
    document.getElementById(selector).addEventListener('click', function () {
      this.classList.add('pop');
    });
  }
})();
