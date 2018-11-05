import {
  DefaultPage,
  Layout
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: Layout,
      isIndex: true,
    },
  ],
};
