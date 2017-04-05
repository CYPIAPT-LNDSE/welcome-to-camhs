const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Path = require('path');

const send = require('./send-email')
const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8080
});

server.register([Inert, Vision], err => {
  if(err){ console.log(err); }

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: Path.join(__dirname, '..', 'src', 'templates'),
    layoutPath: 'layout',
    layout: 'default',
    path: 'views',
    partialsPath: 'partials'
  });

  server.route(routes);
});

module.exports = server;
