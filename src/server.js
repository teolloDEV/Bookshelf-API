const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const config = {
  port: 9000,
  host: 'localhost',
};

/**
 * Initiate Hapi Server
 * @returns {Promise<Hapi.Server>}
 */
const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();

  //console.log(`Server berjalan pada ${server.info.uri}`);

  return server;
};

init();
