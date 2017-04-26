(function ($) {
  'use strict';

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  var chooseAvatarBtn = document.getElementsByClassName('choose-avatar')[0];

  chooseAvatarBtn.addEventListener('click', function () {
    var timeout;
    var activeAvatar = document.querySelectorAll('.carousel .carousel-item.active')[0];
    var avatarClasses = activeAvatar.className;
    var avatar = avatarClasses.replace(/(bear|monkey|lion)|[^]/g, '$1');

    app.animateCheckmark();
    sessionStorage.setItem('avatar', avatar);

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      window.location.href = 'introduction';
    }, 1500);
  });

})(jQuery);
