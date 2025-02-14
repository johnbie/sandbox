import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, Koa!';
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
