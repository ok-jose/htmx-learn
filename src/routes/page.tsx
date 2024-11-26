import { Elysia } from 'elysia';
import { Html } from '@elysiajs/html';
import MainLayout from '~/views/layouts/main';

export const pageRouter = new Elysia().get('/index', () => {
  return (
    <MainLayout>
      <div>
        <button hx-post='/api/search' hx-target='#result'>
          Count Up
        </button>
        <output id='result'></output>
      </div>
    </MainLayout>
  );
});
