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

  // var sleepSlider = document.getElementsByClassName("sleep__range")[0];
  // sleepSlider.onchange = function(){ lion(); }
  // sleepSlider.oninput = function(){ lion(); }
  //
  // function lion(){
  //   if (sleepSlider.value === '0'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping0.svg')
  //   }
  //   if (sleepSlider.value === '1'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping1.svg')
  //   }
  //   if (sleepSlider.value === '2'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping2.svg')
  //   }
  //   if (sleepSlider.value === '3'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping3.svg')
  //   }
  //   if (sleepSlider.value === '4'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping4.svg')
  //   }
  //   if (sleepSlider.value === '5'){
  //     changeImageSrcOfLion('assets/sleeping-lions/lion-sleeping5.svg')
  //   }
  // }

  function changeImageSrcOfLion(src){
    var element = document.getElementsByClassName("sleep__sleeping-lion")[0];
    element.src = src;
  }
})();
