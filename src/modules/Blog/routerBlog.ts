import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerBlog = {
  path: '/blog',
  children: [
    {
      path: '',
      name: RouteName.BLOG,
      component: RouterView,
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
