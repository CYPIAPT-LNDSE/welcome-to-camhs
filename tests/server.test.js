const test = require('tape');
const server = require('../src/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h1 class="welcome__title">'), 'The h1 header was found in the welcome.hbs response');
    t.end();
  });
});

test('Check /index.js', t => {
  const options = {
    method: 'GET',
    url: '/index.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/jquery.min.js', t => {
  const options = {
    method: 'GET',
    url: '/public/jquery.min.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/materialize/css/materialize.min.css', t => {
  const options = {
    method: 'GET',
    url: '/public/materialize/css/materialize.min.css'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/materialize/js/materialize.min.js', t => {
  const options = {
    method: 'GET',
    url: '/public/materialize/js/materialize.min.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /avatar', t => {
  const options = {
    method: 'GET',
    url: '/avatar'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="avatar__title">'), 'The h2 title was found in the choose-an-avatar.hbs response');
    t.end();
  });
});

test('Check /introduction', t => {
  const options = {
    method: 'GET',
    url: '/introduction'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<div class="introduction">'), 'The <div class="introduction"> was found in the introduction.hbs response');
    t.end();
  });
});

test('Check /eating', t => {
  const options = {
    method: 'GET',
    url: '/eating'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="eating__title">'), 'The h2 title was found in the eating.hbs response');
    t.end();
  });
});

test('Check /feelings', t => {
  const options = {
    method: 'GET',
    url: '/feelings'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="feelings__title">'), 'The h2 title was found in the feelings.hbs response');
    t.end();
  });
});

test('Check /personality', t => {
  const options = {
    method: 'GET',
    url: '/personality'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="personality__title">'), 'The h2 title was found in the personality.hbs response');
    t.end();
  });
});

test('Check /hobbies', t => {
  const options = {
    method: 'GET',
    url: '/hobbies'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="hobbies__title">'), 'The h2 title was found in the hobbies.hbs response');
    t.end();
  });
});

test('Check /sleep', t => {
  const options = {
    method: 'GET',
    url: '/sleep'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="sleep__title">'), 'The h2 title was found in the sleep.hbs response');
    t.end();
  });
});

test('Check /friends', t => {
  const options = {
    method: 'GET',
    url: '/friends'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="friends__title">'), 'The h2 title was found in the friends.hbs response');
    t.end();
  });
});

test('Check /school', t => {
  const options = {
    method: 'GET',
    url: '/school'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h2 class="school__title">'), 'The h2 title was found in the school.hbs response');
    t.end();
  });
});

test('Check GET to /finished', t => {
  const options = {
    method: 'GET',
    url: '/finished'
  };

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.includes('<h1 class="finished__header">'), 'The h1 header was found in the finished.hbs response');
    t.end();
  });
});

test('Check POST to /finished', t => {
  const options = {
    method: 'POST',
    url: '/finished',
    payload: {
      from: '"CAHMS" <welcome.to.cahms@hotmail.co.uk>',
      to: 'example@example.com',
      subject: 'CAHMS eurgh Questionnaire',
      text: 'Questionnaire',
      html: '<b>Questionnaire answers will be here :)</b>'
    }
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});
