import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/contribute',
  name: 'Contribute',
  component: LAYOUT,
  redirect: '/contribute/tinymce',
  meta: {
    icon: 'ant-design:appstore-add-outlined',
    title: '投稿',
    orderNo: 100,
  },
  children: [
    {
      path: 'tinymce',
      name: 'TinymceContributePage',
      component: () => import('/@/views/contribute/tinymce/Editor.vue'),
      meta: {
        title: '富文本编辑器',
        icon: 'ant-design:appstore-add-outlined',
      },
    },
    {
      path: 'markdown',
      name: 'MarkdownContributePage',
      component: () => import('/@/views/contribute/markdown/Editor.vue'),
      meta: {
        title: 'Markdown编辑器',
        icon: 'ant-design:appstore-add-outlined',
      },
    },
  ],
};

export default dashboard;
