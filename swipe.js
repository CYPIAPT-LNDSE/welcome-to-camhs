function swipe(direction){
    var endpoint = window.location.pathname;
    var forward, backward;

    // Homepage to avatar page
    if (endpoint === "/welcome-to-camhs/"){
          forward = "https://cypiapt-lndse.github.io/welcome-to-camhs/choose-an-avatar";
          backward = "https://cypiapt-lndse.github.io/welcome-to-camhs";
    }

    // Avatar to introduction page
    if (endpoint === '/welcome-to-camhs/choose-an-avatar'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/introduction';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs';
    }

    // Introduction to eating page
    if (endpoint === '/welcome-to-camhs/introduction'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/eating';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/choose-an-avatar';
    }

    // Eating to personality page
    if (endpoint === '/welcome-to-camhs/eating'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/personality';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/introduction';
    }
    
    // Personality to feelings page
    if (endpoint === '/welcome-to-camhs/personality'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/feelings';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/eating';
    }
    
    // Feelings to finish page
    if (endpoint === '/welcome-to-camhs/feelings'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/finished';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/personality';
    }

    // Finish page
    if (endpoint === '/welcome-to-camhs/finished'){
        forward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/finished';
        backward = 'https://cypiapt-lndse.github.io/welcome-to-camhs/feelings';
    }

    if(direction === "swipeleft" && event.target.tagName !== 'IMG'){
      window.location.href = forward;
    }

    if(direction === "swiperight" && event.target.tagName !== 'IMG'){
      window.location.href = backward;
    }
}

// The if statement stops the carousel from triggering the page swipe
Hammer(document.body).on("swipeleft", function(){ swipe("swipeleft"); });
Hammer(document.body).on("swiperight", function(){ swipe("swiperight"); });
