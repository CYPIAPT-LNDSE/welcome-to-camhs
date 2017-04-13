(function (document, $) {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    addAnswersToSessionStorage();
    updateAvatar('introduction', 'sleeping-lion');
    updateAvatar('finish', 'finish__lion');

    $('.carousel').carousel({
      indicators: true,
      shift: 100
    });
  });

  var rangeValue = document.getElementsByClassName('range-value')[0];
  var verticalArrow = document.getElementsByClassName('vertical-arrow')[0];

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

  anime({
    targets: '.vertical-arrow',
    translateY: 30,
    direction: 'alternate',
    loop: true,
  });

  [
    'lion',
    'bear',
    'monkey'
  ].forEach(function (avatar) {
    var node = document.getElementsByClassName(avatar)[0];
    if (!node ) return;
    node.addEventListener('click', function () {
      animateCheckmark();

      clearTimeout(timeout);
      var timeout = setTimeout(function () {
        location.href = '/introduction';
      }, 1500);

    });
  });

  function animateCheckmark () {
    anime({
      targets: '#checkmark path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      opacity: {
        value: 1,
        duration: 100
      }
    });
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
      node.addEventListener('click', function(){
        var loading = document.getElementsByClassName('loading')[0];
        loading.classList.remove('hidden');
        sendMail();
      });
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
      toggleClass(node, 'pop');
      setSessionStorageOnClick(node, 'pop', 'personality', personality)
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
      addHaloClickEvent(node);
      setSessionStorageOnClick(node, 'haloVisible', 'hobbies', hobbies)
    });

    [
      "home__range",
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
      "home__like",
      "home__dislike",
      "friends__like",
      "friends__dislike",
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
      if (window.location.pathname === '/feelings'){
        element.classList.toggle('haloVisible');
        if (prev && element !== prev){ prev.classList.remove('haloVisible'); }
        prev = element;
      } else {
        element.classList.toggle('haloVisible');
      }
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

    function addArrayToStorage(key, array){
      sessionStorage.setItem(key, JSON.stringify(array));
    }

    function setSessionStorageOnClick(node, className, key, baseArray) {
      if (!node) return;
      node.addEventListener('click', function () {
        if ( node.className.baseVal === className ) {
          baseArray.push(node.id);
        } else {
          var index = baseArray.indexOf(node.id);
          baseArray.splice(index, 1);
        }
        addArrayToStorage(key, baseArray);
      });
    }
  }

  // Adds a class to node
  function toggleClass(node, className){
    if (!node){ return; }
    node.addEventListener("click", function(){
      node.classList.toggle(className);
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
    element.addEventListener('input', function(){
      if (rangeValue){
        addTextToElement(rangeValue, this.value);
        hideElement(verticalArrow, 'hide');
      }
      func(element.name, this.value);
    });
  }

  function addTextToElement(element, value){
    element.innerText = value;
  }

  function hideElement(element, className){
    element.classList.add(className);
  }

  function emojiSprite(){
    var value = document.getElementsByClassName("range")[0].value -1;
    var element = document.getElementsByClassName("emoji-sprite")[0];
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
      emailRecipient.value = '';
      emailRecipient.placeholder = 'Please enter a valid email address.';
      return;
    }
    var emailAddress = emailRecipient.value;
    var payload = JSON.stringify({emailAddress:emailAddress,
      sessionStorage:sessionStorage});
      var form = document.getElementsByClassName('finish__email-form')[0];
      var homeBtn = document.getElementsByClassName('home-button')[0];
      var loading = document.getElementsByClassName('loading')[0];
      var prevButton = document.getElementsByClassName('button--prev')[0];

      httpPostRequest(payload, function(responseText){
        var response = JSON.parse(responseText);
        if (response.status === 'Email sent'){
          addElement(response.status);
          sessionStorage.clear();
          form.classList.add('hidden');
          loading.classList.add('hidden');
          homeBtn.classList.remove('hidden');
          prevButton.classList.add('hidden');
        } else {
          addElement(response.status, 'cross');
        }
      });
    }

    function addElement(htmlContent) {
      var newP = document.createElement("p");
      var newContent = document.createTextNode(htmlContent);
      var container = document.getElementsByClassName("finish__prompt-container")[0];
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      newP.appendChild(newContent);
      animateCheckmark();
      container.appendChild(newP);
    }

    function httpPostRequest(payload, cb){
      var http = new XMLHttpRequest();
      http.open("POST", '/finished', true);
      http.setRequestHeader("Content-type", "application/json");
      http.onreadystatechange = function() {
        if (http.readyState === 4) {
          cb(http.responseText);
        }
      };
      http.send(payload);
    }

  })(document, jQuery);
