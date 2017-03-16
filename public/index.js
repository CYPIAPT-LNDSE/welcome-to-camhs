(function ($) {
  "use strict";

  addAnswersToSessionStorage();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  [
    "sleep__range"
  ].forEach(range => {
    if (document.getElementsByClassName(range)[0]){
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement( node, sleepingLion );
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
    ].forEach(emotion => {
      var node = document.getElementById(emotion);
      addClassToNode(node, 'pop');
      addClickEventArray('personality', node, emotion, personality);
    });

    [
      "sad-emoji",
      "happy-emoji",
      "indifferent-emoji"
    ].forEach(emoji => {
      var node = document.getElementsByClassName(emoji)[0];
      addClickEventSingle('feelings', node, emoji.match(/^[a-z]+/));
    });

    [
      "name",
      "age"
    ].forEach(inputField => {
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
    ].forEach(hobby => {
      var node = document.getElementsByClassName(hobby)[0];
      addClassToNode(node, 'js-chosen');
      addClickEventArray('hobbies', node, hobby, hobbies);
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

  // Adds a class to baloons which makes them disappear when clicked.
  function addPopClassToBallons(node){
    if (!node){ return; }
    node.addEventListener("click", function(){
      node.classList.add('pop');
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
})(jQuery);
