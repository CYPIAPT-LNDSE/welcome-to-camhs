module.exports = [
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('welcome');
    }
  }
];
