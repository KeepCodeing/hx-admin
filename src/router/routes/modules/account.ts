import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/center',
  meta: {
    icon: 'ant-design:idcard-outlined',
    title: '账号',
    orderNo: 100,
  },
  children: [
    {
      path: 'center',
      name: 'AccountCenterPage',
      component: () => import('/@/views/account/center/index.vue'),
      meta: {
        title: '个人中心',
        icon: 'ant-design:ordered-list-outlined',
      },
    },
    {
      path: 'setting',
      name: 'AccountSettingPage',
      component: () => import('/@/views/account/setting/index.vue'),
      meta: {
        title: '个人设置',
        icon: 'ant-design:key-outlined',
      },
    },
  ],
};

export default dashboard;
