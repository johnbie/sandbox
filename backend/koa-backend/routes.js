import Router from 'koa-router';

const router = new Router();

// Shared endpoint for all request types
router.all('/api/resource/:id', async (ctx, next) => {
  // Handle shared logic for all request types
  console.log('Shared logic executed');

  // Call the next middleware
  await next();
});

// GET endpoint
router.get('/api/resource/:id', async (ctx) => {
  ctx.body = `GET request received for resource with ID ${ctx.params.id}`;
});

// POST endpoint
router.post('/api/resource', async (ctx) => {
  ctx.body = 'POST request received for resource';
});

// PUT endpoint
router.put('/api/resource/:id', async (ctx) => {
  ctx.body = `PUT request received for resource with ID ${ctx.params.id}`;
});

// DELETE endpoint
router.delete('/api/resource/:id', async (ctx) => {
  ctx.body = `DELETE request received for resource with ID ${ctx.params.id}`;
});

export default router;

