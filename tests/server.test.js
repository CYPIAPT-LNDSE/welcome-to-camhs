const test = require('tape');
const server = require('../src/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code, test passed');
    t.end();
  });
});

test('Check /main.css', t => {
  const options = {
    method: 'GET',
    url: '/main.css'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code, test passed');
    t.end();
  });
});

test('Check /index.js', t => {
  const options = {
    method: 'GET',
    url: '/index.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code, test passed');
    t.end();
  });
});
