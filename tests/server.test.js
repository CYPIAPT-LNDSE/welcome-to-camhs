const test = require('tape');
const server = require('../src/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /main.css', t => {
  const options = {
    method: 'GET',
    url: '/main.css'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
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

test('Check /introduction', t => {
  const options = {
    method: 'GET',
    url: '/introduction'
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
    t.end();
  });
});
