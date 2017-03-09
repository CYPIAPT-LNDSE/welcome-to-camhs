const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8080
});

server.register([Inert], err => {
  if(err) console.log(err);

  server.route(routes);
});

module.exports = server;
