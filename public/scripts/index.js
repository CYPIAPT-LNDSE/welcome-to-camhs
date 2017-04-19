window.app = (function () {
  'use strict';

  addAnswersToSessionStorage();
  updateAvatar('introduction', 'sleeping-lion');
  // updateAvatar('finish', 'finish__lion');
  var rangeValue = document.getElementsByClassName('range-value')[0];
  var verticalArrow = document.getElementsByClassName('vertical-arrow')[0];

  function updateAvatar (selector, avatarSelector) {
    var page = document.getElementsByClassName(selector)[0];
    if (!page) { return; }
    var avatarImg = page.getElementsByClassName(avatarSelector)[0];
    var avatar = sessionStorage.getItem('avatar');
    avatarImg.src = 'assets/' + avatar + '.svg';
  }

  function addAnswersToSessionStorage(){
    [
      'lion',
      'bear',
      'monkey'
    ].forEach(function (avatar) {
      var node = document.getElementsByClassName(avatar)[0];
      addClickEventSingle('avatar', node, avatar);
    });

    [
      'strange',
      'happy',
      'angry',
      'fun',
      'boring',
      'kind',
      'sad'
    ].forEach(function(emotion){
      var node = document.getElementById(emotion);
      toggleClass(node, 'pop');
      setSessionStorageOnClick(node, 'pop', 'personality');
      addHaloClickEvent(node);

    });

    [
      'sad-emoji',
      'happy-emoji',
      'indifferent-emoji',
      'nervous-emoji',
      'shocked-emoji',
      'scared-emoji'
    ].forEach(function(emoji){
      var node = document.getElementsByClassName(emoji)[0];
      addHaloClickEvent(node);
      addClickEventSingle('feelings', node, emoji.match(/^[a-z]+/));
    });

    [
      'name',
      'age'
    ].forEach(function(inputField){
      var node = document.getElementsByClassName(inputField)[0];
      addKeyupEvent(inputField, node);
    });

    [
      'football',
      'tennis',
      'music',
      'dance',
      'drawing',
      'photography',
      'cooking',
      'gardening',
      'puzzles',
      'camping',
      'fishing',
      'walking'
    ].forEach(function(hobby){
      var node = document.getElementById(hobby);
      addHaloClickEvent(node);
      setSessionStorageOnClick(node, 'haloVisible', 'hobbies');
    });

    [
      'home__range',
      'school__range',
      'friends__range',
      'sleep__range'
    ].forEach(function(range){
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement(node, function(key, value){
        if (range === 'sleep__range') {
          sleepingLion();
        } else {
          emojiSprite();
        }
        addSingleValueToStorage(key, value);
      });
    });

    [
      'eating__range'
    ].forEach(function(range) {
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement(node, function(key, value) {
        addSingleValueToStorage(key, value);
      });
    });

    [
      'home__like',
      'home__dislike',
      'friends__like',
      'friends__dislike',
      'school__like',
      'school__dislike'
    ].forEach(function(textarea){
      var node = document.getElementsByClassName(textarea)[0];
      addKeyupEvent(textarea, node);
    });

    function addKeyupEvent(key, element){
      if(!element){ return; }
      element.addEventListener('keyup', function(){
        addSingleValueToStorage(key, element.value);
      });
    }

    function addClickEventSingle(key, element, value){
      if(!element){ return; }
      element.addEventListener('click', function(){
        addSingleValueToStorage(key, value);
      });
    }

    function addHaloClickEvent(element){
      if (!element){ return; }
      element.addEventListener('click', function(){
        addHalo(element);
      });
    }

    function addHalo(element){
      if (window.location.pathname === '/feelings'){
        var prev = sessionStorage.getItem('feelings') + '-emoji';
        if (prev === 'null-emoji'){ prev = 'happy-emoji'; }
        var emoji = document.getElementsByClassName(prev)[0];
        emoji.classList.remove('haloVisible');
      }
      element.classList.toggle('haloVisible');
    }

    function addClickEventArray(key, element, value, array){
      if(!element){ return; }
      element.addEventListener('click', function(){
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

    function setSessionStorageOnClick(node, className, key) {
      if (!node) { return; }
      node.addEventListener('click', function () {
        var baseArray = JSON.parse(sessionStorage.getItem(key)) || [];
        if (node.className.baseVal === className) {
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
    node.addEventListener('click', function(){
      node.classList.toggle(className);
    });
  }

  function sleepingLion(){
    var value = document.getElementsByClassName('sleep__range')[0].value;
    var element = document.getElementsByClassName('sleep__sleeping-lion')[0];
    changeBackgroundPosition(element, value, -331);
  }

  function changeBackgroundPosition(element, value, illustrationSize){
    element.style.backgroundPosition = parseInt(value) * illustrationSize + 'px';
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
    var value = document.getElementsByClassName('range')[0].value -1;
    var element = document.getElementsByClassName('emoji-sprite')[0];
    changeBackgroundPosition(element, value, -180);
  }

  return {
    updateAvatar: updateAvatar
  };

})();
