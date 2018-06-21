const Hapi = require('hapi');
const Good = require('good');
const Vision = require('vision');
const Inert = require('inert');
const EJS = require('ejs');
const config = require('./config/config.js');
const mock = require('./data/mock.json');

const server = new Hapi.Server();
server.connection({ port: config.port });

server.register([Inert, Vision, {
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}], (err) => {
  if (err) {
    throw err;
  }

  server.views({
    engines: { ejs: EJS },
    relativeTo: __dirname,
    path: 'views',
  });

  server.route([{
    method: 'GET',
    path: '/javascripts/{path*}',
    handler: {
      directory: {
        path: 'public/javascripts',
        listing: false,
        index: false,
      },
    },
  },
  {
    method: 'GET',
    path: '/styles/{file*}',
    handler: {
      directory: {
        path: 'styles',
        listing: false,
        index: false,
      },
    },
  }]);
});

server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply.view('index', { title: 'Redux Shopping Cart' }),
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => reply.view('index', { title: 'Redux Shopping Cart' }),
  },
  {
    method: 'GET',
    path: '/items',
    handler: (request, reply) => reply(mock),
  },
]);

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log(`Server running at: ${server.info.uri}`);
});
