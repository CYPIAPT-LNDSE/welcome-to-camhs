(function ($) {
  "use strict";

  addAnswersToSessionStorage();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  [
   "send-email-button"
 ].forEach(button => {
    var node = document.getElementsByClassName(button)[0];
    if (node){
      node.addEventListener('click', function(){ sendMail() });
    }
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

  [
    "sleep__range",
    "friends__range"
  ].forEach(range => {
    if (document.getElementsByClassName(range)[0]){
      var node = document.getElementsByClassName(range)[0];
      addOnInputToElement( node, emojiSprite );
    }
  });

  function addOnInputToElement(element, func){
    element.oninput = function(){ func() }
  }

  function emojiSprite(){
    var value = document.getElementsByClassName("friends__range")[0].value;
    var element = document.getElementsByClassName("friends__emoji-sprite")[0];
    changeBackgroundPosition(element, value, -180)
  }

  function changeBackgroundPosition(element, value, illustrationSize){
    element.style.backgroundPosition = parseInt(value) * illustrationSize + "px";
  }

  function emailValidator(emailAddress){
    var regex = RegExp(
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".' +
      '+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-z' +
      'A-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    )
    return regex.test(emailAddress) ? true : false;
  }

  function sendMail(){
    var emailRecipient = document.getElementsByClassName("finish__email-input")[0];

    if (!emailValidator(emailRecipient.value)){
      emailRecipient.value = 'Please enter a valid email address.'
      return;
    }

    var mailOptions = {
      from: '"CAHMS 👻" <welcome.to.cahms@hotmail.co.uk>', // sender address
      to: emailRecipient.value, // list of receivers
      subject: 'CAHMS Questionnaire', // Subject line
      text: 'Questionnaire', // plain text body
      html: '<b>Questionnaire answers will be here :)</b>' // html body
    }

    axios.post('/finished', mailOptions)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
  }

})(jQuery);
