import { Elysia } from 'elysia';

import { logger } from '~/utils/logger';
import { Adapter } from '~/config/enum';

export const apiRouter = new Elysia().group('/api', (app) =>
  app
    .onError(({ code, error }) => {
      logger.error(error);
      return {
        code,
        message: error.message,
      };
    })
    .post(
      '/search',
      async ({ body: { link, adapters } }) => {
        const searchResult = await Promise.resolve([
          {
            name: 'Song Name',
            type: 'song',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            adapter: Adapter.YouTube,
          },
        ]);

        return searchResult;
      }
      // {
      //   body: searchPayloadValidator,
      //   query: apiVersionValidator,
      // }
    )
    .get('/ping', () => {
      return 'pongsss';
    })
);
