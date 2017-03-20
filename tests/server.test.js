const test = require('tape');
const server = require('../src/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };
  const data = {
    next: '/avatar'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h1 class="welcome__title">') > -1, 'The h1 header was found in the welcome.hbs response');
    t.equal(response.payload.indexOf(prevButton), -1, 'The prev button was not found in the welcome.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the welcome.hbs response');
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
  const data = {
    prev: '/',
    next: '/introduction'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="avatar__title">') > -1, 'The h2 title was found in the choose-an-avatar.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the choose-an-avatar.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the choose-an-avatar.hbs response');
    t.end();
  });
});

test('Check /introduction', t => {
  const options = {
    method: 'GET',
    url: '/introduction'
  };
  const data = {
    prev: '/avatar',
    next: '/eating'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<div class="introduction">') > -1, 'The <div class="introduction"> was found in the introduction.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the introduction.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the introduction.hbs response');
    t.end();
  });
});

test('Check /eating', t => {
  const options = {
    method: 'GET',
    url: '/eating'
  };
  const data = {
    prev: '/introduction',
    next: '/feelings'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="eating__title">') > -1, 'The h2 title was found in the eating.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the eating.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the eating.hbs response');
    t.end();
  });
});

test('Check /feelings', t => {
  const options = {
    method: 'GET',
    url: '/feelings'
  };
  const data = {
    prev: '/eating',
    next: '/personality'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="feelings__title">') > -1, 'The h2 title was found in the feelings.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the feelings.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the feelings.hbs response');
    t.end();
  });
});

test('Check /personality', t => {
  const options = {
    method: 'GET',
    url: '/personality'
  };
  const data = {
    prev: '/feelings',
    next: '/hobbies'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="personality__title">') > -1, 'The h2 title was found in the personality.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the personality.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the personality.hbs response');
    t.end();
  });
});

test('Check /hobbies', t => {
  const options = {
    method: 'GET',
    url: '/hobbies'
  };
  const data = {
    prev: '/personality',
    next: '/sleep'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="hobbies__title">') > -1, 'The h2 title was found in the hobbies.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the hobbies.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the hobbies.hbs response');
    t.end();
  });
});

test('Check /sleep', t => {
  const options = {
    method: 'GET',
    url: '/sleep'
  };
  const data = {
    prev: '/hobbies',
    next: '/friends'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.ok(response.payload.indexOf('<h2 class="sleep__title">') > -1, 'The h2 title was found in the sleep.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the sleep.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the sleep.hbs response');
    t.end();
  });
});

test('Check /friends', t => {
  const options = {
    method: 'GET',
    url: '/friends'
  };
  const data = {
    prev: '/sleep',
    next: '/school'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.notEqual(response.payload.indexOf('<h2 class="friends__title">'), -1, 'The h2 title was found in the friends.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the friends.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the friends.hbs response');
    t.end();
  });
});

test('Check /school', t => {
  const options = {
    method: 'GET',
    url: '/school'
  };
  const data = {
    prev: '/friends',
    next: '/finished'
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.notEqual(response.payload.indexOf('<h2 class="school__title">'), -1, 'The h2 title was found in the school.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the school.hbs response');
    t.ok(response.payload.indexOf(nextButton) > -1, 'The next button was found in the school.hbs response');
    t.end();
  });
});

test('Check /finished', t => {
  const options = {
    method: 'GET',
    url: '/finished'
  };
  const data = {
    prev: '/school',
  };
  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.notEqual(response.payload.indexOf('<h1 class="finished__header">'), -1, 'The h1 header was found in the finished.hbs response');
    t.ok(response.payload.indexOf(prevButton) > -1, 'The prev button was found in the finished.hbs response');
    t.equal(response.payload.indexOf(nextButton), -1, 'The next button was not found in the finished.hbs response');
    t.end();
  });
});
