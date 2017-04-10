require('env2')(`${__dirname}/../.env`);
const sendMail = require('./send-email');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const data = {
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
      const data = {
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
      const data =  {
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
      const data =  {
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
      const data =  {
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
      const data =  {
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
      const data =  {
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
      const data =  {
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
      const data =  {
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
      const data =  {
        prev: '/friends',
        next: '/home'
      };
      reply.view('school', data);
    }
  },
  {
    method: 'GET',
    path: '/home',
    handler: (request, reply) => {
      const data =  {
        prev: '/school',
        next: '/finished'
      };
      reply.view('home', data);
    }
  },
  {
    method: 'GET',
    path: '/finished',
    handler: (request, reply) => {
      const data =  {
        isEnd: true,
        prev: '/home'
      };
      reply.view('finished', data);
    }
  },
  {
    method: 'GET',
    path: '/info',
    handler: (request, reply) => {
      var data =  {
        isEnd: true,
        prev: '/finished'
      };
      reply.view('info', data);
    }
  },
  {
    method: 'POST',
    path: '/finished',
    handler: (request, reply) => {
      if (process.env.NODE_ENV === 'testing'){
        reply();
        return;
      }
      const { emailAddress, sessionStorage } = request.payload;
      sendMail(emailAddress, sessionStorage, function(err, info){
        if (err){
          console.log(err);
          reply({status: 'Email not sent'});
        }
        else {
          console.log(info);
          reply({status: 'Email sent'});
        }
      });
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
    path: '/public/anime.min.js',
    handler: {
      file: {
        path: 'node_modules/animejs/anime.min.js'
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
