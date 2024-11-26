import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';

const app = new Elysia()
  .use(staticPlugin())
  .listen(3000)
  .get('/', () => 'Hello World!');

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
export { app };
