import { resetView } from 'mettle';
import { initRouter } from 'mettle-router';

import Home from '../views/home';
import About from '../views/about';

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
  resetView,
);

export default router;
