import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerHome = {
  path: '/home',
  component: RouterView,
  children: [
    {
      path: 'dashboard',
      component: RouterView,
    },
    {
      path: 'profile',
      component: RouterView,
      children: [
        {
          path: 'edit',
          component: RouterView,
        },
        {
          path: 'view',
          component: RouterView,
        },
      ],
    },
    {
      path: 'settings',
      component: RouterView,
      children: [
        {
          path: 'account',
          component: RouterView,
          children: [
            {
              path: 'security',
              component: RouterView,
            },
            {
              path: 'notifications',
              component: RouterView,
            },
          ],
        },
        {
          path: 'preferences',
          component: RouterView,
          children: [
            {
              path: 'theme',
              component: RouterView,
            },
            {
              path: 'language',
              component: RouterView,
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
