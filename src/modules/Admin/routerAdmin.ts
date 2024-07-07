import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerAdmin = {
  path: '/admin',
  children: [
    {
      path: 'users',
      children: [
        {
          path: '',
          name: RouteName.USER_LIST,
          component: RouterView,
        },
        {
          path: ':userId',
          component: RouterView,
          children: [
            {
              path: '',
              name: RouteName.USER,
              component: RouterView,
            },
            {
              path: 'permissions/:permissionId',
              name: RouteName.USER_PERMISSION,
              component: RouterView,
            },
          ],
        },
      ],
    },
    {
      path: 'reports',
      children: [
        {
          path: '',
          name: RouteName.REPORT_LIST,
          component: RouterView,
        },
        {
          path: ':reportId',
          name: RouteName.REPORT,
          component: RouterView,
        },
      ],
    },
    {
      path: 'logs',
      children: [
        {
          path: '',
          name: RouteName.LOG_LIST,
          component: RouterView,
        },
        {
          path: ':logId',
          children: [
            {
              path: '',
              name: RouteName.LOG,
              component: RouterView,
            },
            {
              path: 'details',
              name: RouteName.LOG_DETAILS,
              component: RouterView,
            },
          ],
        },
      ],
    },
    {
      path: 'settings',
      children: [
        {
          path: 'general',
          name: RouteName.GENERAL,
          component: RouterView,
        },
        {
          path: 'roles',
          children: [
            {
              path: '',
              name: RouteName.ROLE_LIST,
              component: RouterView,
            },
            {
              path: ':roleId',
              children: [
                {
                  path: '',
                  component: RouterView,
                  name: RouteName.ROLE,
                },
                {
                  path: 'permissions/:permissionId',
                  component: RouterView,
                  name: RouteName.ROLE_PERMISSION,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
