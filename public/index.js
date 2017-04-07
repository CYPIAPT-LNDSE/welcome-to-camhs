(function ($) {
  "use strict";

  addAnswersToSessionStorage();
  updateAvatar('introduction', 'sleeping-lion');
  updateAvatar('finish', 'finish__lion');

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

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

  function updateAvatar (selector, avatarSelector) {
    var page = document.getElementsByClassName(selector)[0];
    if (!page) return;
    var avatarImg = page.getElementsByClassName(avatarSelector)[0];
    var avatar = sessionStorage.getItem('avatar');
    avatarImg.src = 'assets/' + avatar + '.svg';
  }

  [
    "send-email-button"
  ].forEach(function(button){
    var node = document.getElementsByClassName(button)[0];
    if (node){
      node.addEventListener('click', function(){ sendMail() });
    }
  });

  function addAnswersToSessionStorage(){
    var personality = [];
    var hobbies = [];

    [
      'lion',
      'bear',
      'monkey'
    ].forEach(function (avatar) {
      var node = document.getElementsByClassName(avatar)[0];
      addClickEventSingle('avatar', node, avatar);
    });

    [
      "strange",
      "happy",
      "angry",
      "fun",
      "boring",
      "kind",
      "sad"
    ].forEach(function(emotion){
      var node = document.getElementById(emotion);
      addClassToNode(node, 'pop');
      addClickEventArray('personality', node, emotion, personality);
    });

    [
      "sad-emoji",
      "happy-emoji",
      "indifferent-emoji",
      "nervous-emoji",
      "shocked-emoji",
      "scared-emoji"
    ].forEach(function(emoji){
      var node = document.getElementsByClassName(emoji)[0];
      addClickEventSingle('feelings', node, emoji.match(/^[a-z]+/));
      addHaloClickEvent(node);
    });

    [
      "name",
      "age"
    ].forEach(function(inputField){
      var node = document.getElementsByClassName(inputField)[0];
      addKeyupEvent(inputField, node);
    });

    [
      "football",
      "tennis",
      "music",
      "dance",
      "drawing",
      "photography",
      "cooking",
      "gardening",
      "puzzles",
      "camping",
      "fishing",
      "walking"
    ].forEach(function(hobby){
      var node = document.getElementById(hobby);
      addClickEventArray('hobbies', node, hobby, hobbies);
    });

    [
      "school__range",
      "friends__range",
      "sleep__range"
    ].forEach(function(range){
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement(node, function(key, value){
        if (range === "sleep__range") {
          sleepingLion();
        } else {
          emojiSprite();
        }
        addSingleValueToStorage(key, value);
      });
    });

    [
      "eating__range"
    ].forEach(function(range) {
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement(node, function(key, value) {
        addSingleValueToStorage(key, value);
      });
    });

    [
      "frineds__like",
      "frineds__dislike",
      "school__like",
      "school__dislike"
    ].forEach(function(textarea){
      var node = document.getElementsByClassName(textarea)[0];
      addKeyupEvent(textarea, node);
    });

    function addKeyupEvent(key, element){
      if(!element){ return; }
      element.addEventListener("keyup", function(){
        addSingleValueToStorage(key, element.value);
      });
    }

    function addClickEventSingle(key, element, value){
      if(!element){ return; }
      element.addEventListener("click", function(){
        addSingleValueToStorage(key, value);
      });
    }

    function addHaloClickEvent(element){
      if (!element){ return; }
      element.addEventListener("click", function(){
        addHalo(element);
      });
    }

    var prev = null;
    function addHalo(element){
      element.classList.toggle('haloVisible');
      if (prev && element !== prev){ prev.classList.remove('haloVisible'); }
      prev = element;
    }

    function addClickEventArray(key, element, value, array){
      if(!element){ return; }
      element.addEventListener("click", function(){
        addValueToArray(key, value, array);
      });
    }

    function addValueToArray(key, value, array){
      array.push(value);
      addArrayToStorage(key, array);
    }

    function addSingleValueToStorage(key, value){
      sessionStorage.setItem(key, value);
    }

    // JSON.stringify() is used here as session storage only supports strings
    function addArrayToStorage(key, array){
      sessionStorage.setItem(key, JSON.stringify(array));
    }
  }

  // Adds a class to node
  function addClassToNode(node, className){
    if (!node){ return; }
    node.addEventListener("click", function(){
      node.classList.add(className);
    });
  }

  function sleepingLion(){
    var value = document.getElementsByClassName("sleep__range")[0].value;
    var element = document.getElementsByClassName("sleep__sleeping-lion")[0];
    changeBackgroundPosition(element, value, -332);
  }

  function changeBackgroundPosition(element, value, illustrationSize){
    element.style.backgroundPosition = parseInt(value) * illustrationSize + "px";
  }

  function addOnInputToElement(element, func){
    if (!element){ return; }
    element.oninput = function(){ func(element.name, this.value) }
  }

  function emojiSprite(){
    var value = document.getElementsByClassName("range")[0].value -1;
    var element = document.getElementsByClassName("friends__emoji-sprite")[0];
    changeBackgroundPosition(element, value, -180);
  }

  function emailValidator(emailAddress){
    var regex = RegExp(
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".' +
      '+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-z' +
      'A-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );
    return regex.test(emailAddress);
  }

  function sendMail(){
    var emailRecipient = document.getElementsByClassName("finish__email-input")[0];
    if (!emailValidator(emailRecipient.value)){
      emailRecipient.value = 'Please enter a valid email address.';
      return;
    }
    var emailAddress = emailRecipient.value;
    var http = new XMLHttpRequest();
    http.open("POST", '/finished', true);
    http.setRequestHeader("Content-type", "application/json");
    var payload = JSON.stringify({emailAddress:emailAddress,
      sessionStorage:sessionStorage});
    http.send(payload);
  }
})(jQuery);
