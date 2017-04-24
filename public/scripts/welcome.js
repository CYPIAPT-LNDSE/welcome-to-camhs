(function (){
  'use stict';

  anime({
    targets: '#lion-head_2_',
    translateY: 6,
    duration: 1700,
    easing: 'easeInQuad',
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#lion-tail',
    translateY: 1,
    duration: 3000,
    easing: 'easeInQuad',
    direction: 'alternate',
    rotate: 0.5,
    loop: true
  });

  anime({
    targets: '#lion-tail',
    translateY: 1,
    duration: 3000,
    easing: 'easeInQuad',
    direction: 'alternate',
    rotate: 0.5,
    loop: true
  });

})();
