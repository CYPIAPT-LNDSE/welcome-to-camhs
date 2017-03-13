(function () {
  'use strict';

  if (document.querySelector('.personality')){
    var balloons = document.querySelectorAll('[class^="balloons--"]');

    balloons.forEach( function (balloon) {
      balloon.addEventListener('click', function () {
        this.classList.add('pop');
      });
    });
  }
})();
