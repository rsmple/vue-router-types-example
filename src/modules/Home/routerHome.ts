import {RouteName} from '@/utils/RouteName'
import type {RouteRecordRaw} from 'vue-router'

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
      component: () => import('./views/ViewDashboard.vue'),
      meta: {
        defaultQueryParams: {} as QueryParamsHomeDashboard,
      },
    },
    {
      path: 'profile',
      name: RouteName.PROFILE,
      component: () => import('./views/ViewProfile.vue'),
    },
    {
      path: 'settings',
      children: [
        {
          path: '',
          name: RouteName.SETTINGS,
          component: () => import('./views/ViewSettings.vue'),
        },
        {
          path: 'account',
          children: [
            {
              path: '',
              name: RouteName.ACCOUNT,
              component: () => import('./views/ViewAccount.vue'),
            },
            {
              path: 'security',
              name: RouteName.SECURITY,
              component: () => import('./views/ViewSecurity.vue'),
            },
            {
              path: 'notifications',
              name: RouteName.NOTIFICATIONS,
              component: () => import('./views/ViewNotifications.vue'),
            },
          ],
        },
        {
          path: 'preferences',
          children: [
            {
              path: '',
              name: RouteName.PREFERENCES,
              component: () => import('./views/ViewPreferences.vue'),
            },
            {
              path: 'theme',
              name: RouteName.THEME,
              component: () => import('./views/ViewTheme.vue'),
            },
            {
              path: 'language',
              name: RouteName.LANGUAGE,
              component: () => import('./views/ViewLanguage.vue'),
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
