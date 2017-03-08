const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const routes = require('./routes');
const path = require('path');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 8080,
  routes: {
    files: {
      relativeTo: path.join(__dirname, '..', 'public')
    }
  }
});

server.register([inert], err => {
  if(err) console.log(err);

  server.route(routes);
});

module.exports = server;
