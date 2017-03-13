module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      var data = {
        next: '/avatar'
      };
      reply.view('welcome', data);
    }
  },
  {
    method: 'GET',
    path: '/avatar',
    handler: (request, reply) => {
      var data = {
        isAvatar: true,
        prev: '/',
        next: '/introduction'
       };
      reply.view('choose-an-avatar', data);
    }
  },
  {
    method: 'GET',
    path: '/introduction',
    handler: (request, reply) => {
      var data =  {
        prev: '/avatar',
        next: '/eating'
      };
      reply.view('introduction', data);
    }
  },
  {
    method: 'GET',
    path: '/eating',
    handler: (request, reply) => {
      var data =  {
        prev: '/introduction',
        next: '/feelings'
      };
      reply.view('eating', data);
    }
  },
  {
    method: 'GET',
    path: '/feelings',
    handler: (request, reply) => {
      var data =  {
        prev: '/eating',
        next: '/personality'
      };
      reply.view('feelings', data);
    }
  },
  {
    method: 'GET',
    path: '/personality',
    handler: (request, reply) => {
      var data =  {
        prev: '/feelings',
        next: '/finished'
      };
      reply.view('personality', data);
    }
  },
  {
    method: 'GET',
    path: '/finished',
    handler: (request, reply) => {
      var data =  {
        prev: '/personality',
      };
      reply.view('finished', data);
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
