"use strict";

var addAnswersToSessionStorage = function(){
  var nameInput = document.getElementsByClassName("name-input")[0];
  var ageInput = document.getElementsByClassName("age-input")[0];
  var strange = document.getElementById("strange");
  var happy = document.getElementById("happy");
  var angry = document.getElementById("angry");
  var fun = document.getElementById("fun");
  var boring = document.getElementById("boring");
  var kind = document.getElementById("kind");
  var sad = document.getElementById("sad");
  var personality = [];

  addKeyupEvent('name', nameInput);
  addKeyupEvent('age', ageInput);

  addClickEvent('personality', strange, 'strange', personality);
  addClickEvent('personality', happy, 'happy', personality);
  addClickEvent('personality', angry, 'angry', personality);
  addClickEvent('personality', fun, 'fun', personality);
  addClickEvent('personality', boring, 'boring', personality);
  addClickEvent('personality', kind, 'kind', personality);
  addClickEvent('personality', sad, 'sad', personality);

  function addKeyupEvent(key, element){
    if(!element){ return; };
    element.addEventListener("keyup", function(){
      addToStorageValue( key, element.value )
    });
  };

  function addClickEvent(key, element, personalityTrait, array){
    if(!element){ return; };
    element.addEventListener("click", function(){
      addToStorageArray(key, personalityTrait, array);
    });
  };

  function addToStorageValue(key, userInput){
    sessionStorage.setItem(key, userInput);
  };

  // JSON.stringify() is used here as session storage only supports strings
  function addToStorageArray(key, userInput, array){
    array.push(userInput);
    sessionStorage.setItem(key, JSON.stringify(personality));
  };
}();
