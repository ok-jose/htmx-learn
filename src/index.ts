import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { logger } from './utils/logger';
import { apiRouter } from './routes/api';
import { pageRouter } from './routes/page';

const app = new Elysia()
  .use(html())
  .use(
    staticPlugin({
      prefix: '',
      headers: {
        'Cache-Control': 'public, max-age=86400',
      },
    })
  )
  .on('beforeHandle', async ({ request }) => {
    logger.info(
      `${request.method} ${request.url} - ${request.headers.get('user-agent')}`
    );
  })
  .listen(3000)
  .use(apiRouter)
  .use(pageRouter);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
export { app };
