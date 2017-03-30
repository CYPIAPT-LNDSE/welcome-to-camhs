(function ($) {
  "use strict";

  addAnswersToSessionStorage();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

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
      "indifferent-emoji"
    ].forEach(function(emoji){
      var node = document.getElementsByClassName(emoji)[0];
      addClickEventSingle('feelings', node, emoji.match(/^[a-z]+/));
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
      "gymnastics",
      "dance",
      "drawing",
      "photography",
      "cooking",
      "gardening",
      "puzzles",
      "camping",
      "fishing",
      "walking",
      "gymnastics-mobile",
      "photography-mobile",
      "walking-mobile",
      "puzzles-mobile"
    ].forEach(function(hobby){
      var node = document.getElementsByClassName(hobby)[0];
      addClassToNode(node, 'js-chosen');
      addClickEventArray('hobbies', node, hobby, hobbies);
    });

    [
      "sleep__range",
      "friends__range",
      "school__range"
    ].forEach(function(range){
      var node = document.getElementsByClassName(range)[0];
      if (node) {
        if (range === "sleep__range") {
          addOnInputToElement( node, sleepingLion );
        } else {
          addOnInputToElement( node, emojiSprite );
        }
      }
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

  function addOnInputToElement(element, func){
    element.oninput = function(){ func() }
  }

  function sleepingLion(){
    var value = document.getElementsByClassName("sleep__range")[0].value;
    var element = document.getElementsByClassName("sleep__sleeping-lion")[0];
    changeBackgroundPosition(element, value, -332)
  }

  function changeBackgroundPosition(element, value, illustrationSize){
    element.style.backgroundPosition = parseInt(value) * illustrationSize + "px";
  }

  function emojiSprite(){
    var value = document.getElementsByClassName("range")[0].value;
    var element = document.getElementsByClassName("friends__emoji-sprite")[0];
    changeBackgroundPosition(element, value, -180)
  }

  function emailValidator(emailAddress){
    var regex = RegExp(
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".' +
      '+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-z' +
      'A-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    )
    return regex.test(emailAddress);
  }

  function getDataFromStorage(){
    var data = {};
    for (var key in sessionStorage){
      data[key] = sessionStorage[key]
    }
    console.log(data);
  }

  function sendMail(){
    var emailRecipient = document.getElementsByClassName("finish__email-input")[0];
    if (!emailValidator(emailRecipient.value)){
      emailRecipient.value = 'Please enter a valid email address.'
      return;
    }
    var emailAddress = emailRecipient.value;
    var http = new XMLHttpRequest();
    http.open("POST", '/finished', true);
    http.send(emailAddress);
    getDataFromStorage()
  }
})(jQuery);
