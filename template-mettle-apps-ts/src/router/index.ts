import { resetView } from 'mettle';
import { initRouter } from 'mettle-router';

import Home from '../template/home';
import About from '../template/about';

const router = initRouter(
  [
    {
      path: '/',
      template: Home,
    },
    {
      path: '/about',
      template: About,
    },
  ],
  resetView
);

export default router;
