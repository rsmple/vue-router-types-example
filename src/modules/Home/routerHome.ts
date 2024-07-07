import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

type QueryParamsHomeDashboard = {
  dateRange?: string
  sortBy?: string
  filterBy?: string
  viewMode?: string
}

export const routerHome = {
  path: '/home',
  children: [
    {
      path: 'dashboard',
      name: RouteName.DASHBOARD,
      component: RouterView,
      meta: {
        defaultQueryParams: {} as QueryParamsHomeDashboard,
      },
    },
    {
      path: 'profile',
      name: RouteName.PROFILE,
      component: RouterView,
    },
    {
      path: 'settings',
      children: [
        {
          path: '',
          name: RouteName.SETTINGS,
          component: RouterView,
        },
        {
          path: 'account',
          children: [
            {
              path: '',
              name: RouteName.ACCOUNT,
              component: RouterView,
            },
            {
              path: 'security',
              name: RouteName.SECURITY,
              component: RouterView,
            },
            {
              path: 'notifications',
              name: RouteName.NOTIFICATIONS,
              component: RouterView,
            },
          ],
        },
        {
          path: 'preferences',
          children: [
            {
              path: '',
              name: RouteName.PREFERENCES,
              component: RouterView,
            },
            {
              path: 'theme',
              name: RouteName.THEME,
              component: RouterView,
            },
            {
              path: 'language',
              name: RouteName.LANGUAGE,
              component: RouterView,
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
