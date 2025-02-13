import { resetView } from 'mettle';
import { initRouter } from 'mettle-router';

import home from '../template/home';
import about from '../template/about';

const router = initRouter(
  [
    {
      path: '/',
      template: home,
    },
    {
      path: '/about',
      template: about,
    },
  ],
  resetView
);

export default router;
