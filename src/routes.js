sendMail = require('./send-email')
require('env2')(`${__dirname}/../.env`);

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      var data = {
        isWelcome: true,
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
        next: '/hobbies'
      };
      reply.view('personality', data);
    }
  },
  {
    method: 'GET',
    path: '/hobbies',
    handler: (request, reply) => {
      var data =  {
        prev: '/personality',
        next: '/sleep'
      };
      reply.view('hobbies', data);
    }
  },
  {
    method: 'GET',
    path: '/sleep',
    handler: (request, reply) => {
      var data =  {
        prev: '/hobbies',
        next: '/friends'
      };
      reply.view('sleep', data);
    }
  },
  {
    method: 'GET',
    path: '/friends',
    handler: (request, reply) => {
      var data =  {
        prev: '/sleep',
        next: '/school'
      };
      reply.view('friends', data);
    }
  },
  {
    method: 'GET',
    path: '/school',
    handler: (request, reply) => {
      var data =  {
        prev: '/friends',
        next: '/finished'
      };
      reply.view('school', data);
    }
  },
  {
    method: 'GET',
    path: '/finished',
    handler: (request, reply) => {
      var data =  {
        isEnd: true,
        prev: '/school'
      };
      reply.view('finished', data);
    }
  },
  {
    method: 'POST',
    path: '/finished',
    handler: (request, reply) => {
      reply({status: 'ok'});
      if (process.env.NODE_ENV === 'testing'){ return; }
      sendMail(request.payload);
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
    path: '/public/jquery.min.js',
    handler: {
      file: {
        path: 'node_modules/jquery/dist/jquery.min.js'
      }
    }
  },
  {
    method: 'GET',
    path: '/public/materialize/{file*}',
    handler: {
      directory: {
        path: 'node_modules/materialize-css/dist'
      }
    }
  }
];
