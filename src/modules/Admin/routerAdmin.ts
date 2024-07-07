import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerAdmin = {
  path: '/admin',
  component: RouterView,
  children: [
    {
      path: 'users/:userId',
      component: RouterView,
      children: [
        {
          path: 'edit',
          component: RouterView,
        },
        {
          path: 'permissions/:permissionId',
          component: RouterView,
        },
      ],
    },
    {
      path: 'reports/:reportId',
      component: RouterView,
    },
    {
      path: 'logs/:logId',
      component: RouterView,
      children: [
        {
          path: 'details',
          component: RouterView,
        },
      ],
    },
    {
      path: 'settings',
      component: RouterView,
      children: [
        {
          path: 'general',
          component: RouterView,
        },
        {
          path: 'roles/:roleId',
          component: RouterView,
          children: [
            {
              path: 'permissions/:permissionId',
              component: RouterView,
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
