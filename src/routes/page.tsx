import { Elysia, t } from 'elysia';
import { Html } from '@elysiajs/html';
import MainLayout from '~/views/layouts/main';
import Dashboard from '~/views/pages/dashboard';
import { logger } from '~/utils/logger';
import SearchCard from '~/views/components/search-card';
import { search } from '~/services/search';

export const pageRouter = new Elysia()
  .get('/index', async ({ query: { id }, redirect }) => {
    try {
      const searchResult = id ? await search({ link: id }) : undefined;

      return (
        <MainLayout
          title={searchResult?.title}
          description={searchResult?.description}
          image={searchResult?.image}
        >
          <Dashboard source={searchResult?.source}>
            {searchResult && <SearchCard searchResult={searchResult} />}
          </Dashboard>
        </MainLayout>
      );
    } catch (err) {
      logger.error(err);
      return redirect('/');
    }
  })
  .post(
    '/api/search',
    async ({ body: { link } }) => {
      const searchResult = await search({ link });

      return <SearchCard searchResult={searchResult} />;
    },
    {
      body: t.Object({
        link: t.String(),
      }),
    }
  );
