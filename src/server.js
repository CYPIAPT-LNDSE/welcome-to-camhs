const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Path = require('path');

const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8080,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '..', 'public')
    }
  }
});

server.register([Inert], err => {
  if(err) console.log(err);

  server.route(routes);
});

module.exports = server;
