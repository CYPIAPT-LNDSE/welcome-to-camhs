(function () {
  "use strict";

  addAnswersToSessionStorage();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  function addAnswersToSessionStorage(){
    var personality = [];

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
      addPopClassToBallons(node);
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
    if (!node){ return };
    node.addEventListener("click", function(){
      node.classList.add('pop');
    });
  }
  // positions of lions:
  // lion 0 : background-position: 0px;
  // lion 1 : background-position: -332px;
  // lion 2 : background-position: -664px;
  // lion 3 : background-position: -996px;
  // lion 4 : background-position: -1328px;
  // lion 5 : background-position: -1650px;

  // math: background-position: 254px + 80px

  var sleepSlider = document.getElementsByClassName("sleep__range")[0];
  sleepSlider.oninput = function(){ lion(); }

  function lion(){
    var value = sleepSlider.value;
    changeBackgroundPosition(value)
  }

  function changeBackgroundPosition(value){
    var element = document.getElementsByClassName("sleep__sleeping-lion")[0];
    var numNum = (parseInt(value) * 0.5).toString();
    console.log(numNum);
    element.style.backgroundPosition = numNum
    console.log(element.style);
  }
})();
