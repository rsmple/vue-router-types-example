import {RouteName} from '@/utils/RouteName'
import type {RouteRecordRaw} from 'vue-router'

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
      component: () => import('./views/ViewBlog.vue'),
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
          component: () => import('./views/ViewPost.vue'),
        },
        {
          path: 'comments/:commentId',
          name: RouteName.POST_COMMENT,
          component: () => import('./views/ViewPostComment.vue'),
        },
      ],
    },
    {
      path: 'categories/:categoryId',
      children: [
        {
          path: '',
          name: RouteName.CATEGORY,
          component: () => import('./views/ViewCategory.vue'),
          meta: {
            defaultQueryParams: {} as QueryParamsCategory,
          },
        },
        {
          path: 'posts/:postId',
          name: RouteName.CATEGORY_POST,
          component: () => import('./views/ViewCategoryPost.vue'),
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
