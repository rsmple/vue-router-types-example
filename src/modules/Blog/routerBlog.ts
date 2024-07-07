import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export type QueryParamsBlog = {
  search?: string
  filterByTags?: string[]
  sortBy?: string
}

export type QueryParamsCategory = {
  search?: string
  filterByTags?: string[]
  sortBy?: string
}

export const routerBlog = {
  path: '/blog',
  children: [
    {
      path: '',
      name: RouteName.BLOG,
      component: RouterView,
      meta: {
        defaultQueryParams: {} as QueryParamsBlog,
      },
    },
    {
      path: 'posts/:postId',
      children: [
        {
          path: '',
          name: RouteName.POST,
          component: RouterView,
        },
        {
          path: 'comments/:commentId',
          name: RouteName.POST_COMMENT,
          component: RouterView,
        },
      ],
    },
    {
      path: 'categories/:categoryId',
      children: [
        {
          path: '',
          name: RouteName.CATEGORY,
          component: RouterView,
          meta: {
            defaultQueryParams: {} as QueryParamsCategory,
          },
        },
        {
          path: 'posts/:postId',
          name: RouteName.CATEGORY_POST,
          component: RouterView,
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
