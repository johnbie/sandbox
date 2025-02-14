import Koa from 'koa';
import router from './routes.js';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, Koa!';
});

// Register routes
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
