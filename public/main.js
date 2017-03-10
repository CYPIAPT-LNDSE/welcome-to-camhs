addAnswersToSessionStorage = function(){
  var nameInput = document.getElementsByClassName("name-input")[0];
  var ageInput = document.getElementsByClassName("age-input")[0];

  addKeyupEvent('name', nameInput);
  addKeyupEvent('age', ageInput);

  function addKeyupEvent(key, element){
    element.addEventListener("keyup", function(){
      addToStorage( key, element.value )
    });
  };

  function addToStorage(key, userInput){
    sessionStorage.setItem(key, userInput);
  };
}();
