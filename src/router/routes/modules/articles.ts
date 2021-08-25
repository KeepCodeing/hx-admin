import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/articles',
  name: 'Articles',
  component: LAYOUT,
  redirect: '/articles/list',
  meta: {
    icon: 'ant-design:book-outlined',
    title: '文章',
    orderNo: 100,
  },
  children: [
    {
      path: 'list',
      name: 'ArticlesListPage',
      component: () => import('/@/views/articles/articles_list/index.vue'),
      meta: {
        title: '文章列表',
        icon: 'ant-design:container-outlined',
      },
    },
    {
      path: 'view/:id',
      name: 'ArticlesViewPage',
      component: () => import('/@/views/articles/articles_view/index.vue'),
      meta: {
        title: '文章详情',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
