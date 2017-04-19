(function (app) {
  'use strict';

  app.updateAvatar('finish', 'finish__lion');

  [
    "send-email-button"
  ].forEach(function(button){
    var node = document.getElementsByClassName(button)[0];
    if (node){
      node.addEventListener('click', function() {
        var loading = document.getElementsByClassName('loading')[0];
        loading.classList.remove('hidden');
        sendMail();
      });
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

  function sendMail() {
    var emailRecipient = document.getElementsByClassName("finish__email-input")[0];
    var loading = document.getElementsByClassName('loading')[0];
    if (!emailValidator(emailRecipient.value)){
      emailRecipient.value = '';
      emailRecipient.placeholder = 'Please enter a valid email address.';
      loading.classList.add('hidden');
      return;
    }
    var emailAddress = emailRecipient.value;
    var payload = JSON.stringify({emailAddress:emailAddress,
      sessionStorage:sessionStorage});
      var form = document.getElementsByClassName('finish__email-form')[0];
      var homeBtn = document.getElementsByClassName('home-button')[0];
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
      var checkmark = document.getElementById('checkmark');
      var newP = document.createElement("p");
      var newContent = document.createTextNode(htmlContent);
      var container = document.getElementsByClassName("finish__prompt-container")[0];
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      checkmark.classList.remove('hidden');
      newP.appendChild(newContent);
      app.animateCheckmark();
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

})(window.app);
