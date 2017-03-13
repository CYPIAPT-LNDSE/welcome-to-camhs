module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('welcome');
    }
  },
  {
    method: 'GET',
    path: '/avatar',
    handler: (request, reply) => {
      var data = { avatar: true };
      reply.view('choose-an-avatar', data);
    }
  },
  {
    method: 'GET',
    path: '/introduction',
    handler: (request, reply) => {
      reply.view('introduction');
    }
  },
  {
    method: 'GET',
    path: '/feelings',
    handler: (request, reply) => {
      reply.view('feelings');
    }
  },
  {
    method: 'GET',
    path: '/eating',
    handler: (request, reply) => {
      reply.view('eating');
    }
  },
  {
    method: 'GET',
    path: '/personality',
    handler: (request, reply) => {
      reply.view('personality');
    }
  },
  {
    method: 'GET',
    path: '/finished',
    handler: (request, reply) => {
      reply.view('finished');
    }
  },
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
    path: '/lib/{file*}',
    handler: {
      directory: {
        path: 'lib'
      }
    }
  }
];
