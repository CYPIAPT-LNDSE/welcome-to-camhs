(function (app) {
  'use strict';

  app.updateAvatar('finish', 'finish__lion');

  [
    "send-email-button"
  ].forEach(function(button){
    var node = document.getElementsByClassName(button)[0];
    if (node){
      node.addEventListener('click', function(){ sendMail(); });
    }
  });

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
    var payload = JSON.stringify({emailAddress:emailAddress,
      sessionStorage:sessionStorage});

    httpPostRequest(payload, function(responseText){
      var response = JSON.parse(responseText);
      if (response.status === 'Email sent'){
        addElement(response.status, 'checkmark');
        sessionStorage.clear();
      } else {
        addElement(response.status, 'cross');
      }
    });
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

  function addElement(htmlContent, className) {
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var newContent = document.createTextNode(htmlContent);
    var container = document.getElementsByClassName("finish__prompt-container")[0];
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    newDiv.className = className;
    newP.appendChild(newContent);
    container.appendChild(newDiv);
    container.appendChild(newP);
  }

})(window.app);
