import { Elysia, t } from 'elysia';

import { logger } from '~/utils/logger';
import { Adapter } from '~/config/enum';
import { search } from '~/services/search';

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
      async ({ body: { link } }) => {
        const searchResult = await search({ link });

        return searchResult;
      },
      {
        body: t.Object({
          link: t.String(),
        }),
      }
    )
    .post(
      '/song/search',
      async ({ body: { link } }) => {
        return {
          link,
          name: 'Song Name abc',
          type: 'song',
          adapter: Adapter.YouTube,
        };
      },
      {
        body: t.Object({
          link: t.String(),
        }),
      }
    )
    .get('/user/:id', ({ params: { id } }) => id, {
      params: t.Object({
        id: t.Numeric(),
      }),
    })
    .get(
      '/song/:songId',
      ({ params: { songId } }) => ({
        songId,
        name: 'Song Name abc ssss' + songId,
        type: 'song',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        adapter: Adapter.YouTube,
      }),
      {
        params: t.Object({
          songId: t.String(),
        }),
      }
    )
    .post(
      '/ping',
      ({ body: { songId } }) => ({
        songId,
        name: 'Song Name abc ssss' + songId,
        type: 'song',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        adapter: Adapter.YouTube,
      }),
      {
        body: t.Object({
          songId: t.String(),
        }),
      }
    )
);
