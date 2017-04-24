(function () {
  'use strict';

  anime({
    targets: '#strange',
    translateY: '-5px',
    rotate: [-0.5, 0.5],
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true,
  });

  anime({
    targets: '#happy',
    rotate: 1,
    translateY: ['-2px', '-9px'],
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true,
  });

  anime({
    targets: '#sad',
    translateX: '-20px',
    rotate: [-1, -2],
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true,
  });

  anime({
    targets: '#boring',
    translateX: '2px',
    translateY: '-2px',
    rotate: -1,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#angry',
    translateX: '-5px',
    translateY: '15px',
    rotate: [-1, -2],
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#kind',
    translateX: '-20px',
    translateY: '5px',
    rotate: -3,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#fun',
    translateX: '-20px',
    translateY: '5px',
    rotate: -1.5,
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'alternate',
    loop: true
  });

})();
