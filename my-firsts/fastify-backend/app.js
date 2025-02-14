// Import the Fastify module
const fastify = require('fastify')();

// Define a route
fastify.get('/', async (request, reply) => {
  return { message: 'Hello, Fastify!' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
