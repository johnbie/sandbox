const fastify = require('fastify')();

// Sample data - in a real application, this would typically come from a database
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET endpoint for all items
fastify.get('/items', async (request, reply) => {
  return items;
});

// POST endpoint to add a new item
fastify.post('/items', async (request, reply) => {
  const newItem = request.body;
  items.push(newItem);
  return newItem;
});

// GET endpoint for a specific item
fastify.get('/items/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const item = items.find(item => item.id === id);
  if (!item) {
    reply.code(404).send({ message: 'Item not found' });
    return;
  }
  return item;
});

// PUT endpoint to update a specific item
fastify.put('/items/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const updatedItem = request.body;
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    reply.code(404).send({ message: 'Item not found' });
    return;
  }
  items[index] = { ...items[index], ...updatedItem };
  return items[index];
});

// DELETE endpoint to delete a specific item
fastify.delete('/items/:id', async (request, reply) => {
  const id = parseInt(request.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    reply.code(404).send({ message: 'Item not found' });
    return;
  }
  const deletedItem = items.splice(index, 1);
  return deletedItem;
});


// Helper function to simulate an asynchronous operation with a delay
const simulateAsyncOperation = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000); // Simulated delay of 1 second
  });
};


// Standalone GET endpoint
fastify.get('/standalone', async (request, reply) => {
  await simulateAsyncOperation();
  return { message: 'This is a standalone GET endpoint with asynchronous operation' };
});

// Standalone POST endpoint
fastify.post('/standalone', async (request, reply) => {
  await simulateAsyncOperation();
  return { message: 'This is a standalone POST endpoint with asynchronous operation' };
});

// Standalone PUT endpoint
fastify.put('/standalone', async (request, reply) => {
  return { message: 'This is a standalone PUT endpoint' };
});

// Standalone DELETE endpoint
fastify.delete('/standalone', async (request, reply) => {
  return { message: 'This is a standalone DELETE endpoint' };
});

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
