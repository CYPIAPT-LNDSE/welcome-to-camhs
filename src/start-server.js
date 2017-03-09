const server = require('./server');

server.start(err => {
  if(err) console.log(err);
  console.log(`Server running on ${server.info.uri}`);
});
