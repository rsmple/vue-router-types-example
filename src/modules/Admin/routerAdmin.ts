import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export type QueryParamsUser = {
  activeTab: string
  level?: string,
  assignedBy?: string
}

export type QueryParamsRole = {
  level?: string,
  assignedBy?: string
}

export const routerAdmin = {
  path: '/admin',
  children: [
    {
      path: '',
      name: RouteName.ADMIN,
      component: () => import('./views/ViewAdmin.vue'),
    },
    {
      path: 'users',
      children: [
        {
          path: '',
          name: RouteName.USER_LIST,
          component: () => import('./views/ViewUserList.vue'),
        },
        {
          path: ':userId',
          component: RouterView,
          children: [
            {
              path: '',
              name: RouteName.USER,
              component: () => import('./views/ViewUser.vue'),
              meta: {
                defaultQueryParams: {activeTab: 'MAIN'} as QueryParamsUser,
              },
            },
            {
              path: 'permissions/:permissionId',
              name: RouteName.USER_PERMISSION,
              component: () => import('./views/ViewUserPermission.vue'),
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
          component: () => import('./views/ViewReportList.vue'),
        },
        {
          path: ':reportId',
          name: RouteName.REPORT,
          component: () => import('./views/ViewReport.vue'),
        },
      ],
    },
    {
      path: 'logs',
      children: [
        {
          path: '',
          name: RouteName.LOG_LIST,
          component: () => import('./views/ViewLogList.vue'),
        },
        {
          path: ':logId',
          children: [
            {
              path: '',
              name: RouteName.LOG,
              component: () => import('./views/ViewLog.vue'),
            },
            {
              path: 'details',
              name: RouteName.LOG_DETAILS,
              component: () => import('./views/ViewLogDetails.vue'),
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
          component: () => import('./views/ViewGeneral.vue'),
        },
        {
          path: 'roles',
          children: [
            {
              path: '',
              name: RouteName.ROLE_LIST,
              component: () => import('./views/ViewRoleList.vue'),
            },
            {
              path: ':roleId',
              children: [
                {
                  path: '',
                  component: () => import('./views/ViewRole.vue'),
                  name: RouteName.ROLE,
                  meta: {
                    defaultQueryParams: {} as QueryParamsRole,
                  },
                },
                {
                  path: 'permissions/:permissionId',
                  component: () => import('./views/ViewRolePermission.vue'),
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
