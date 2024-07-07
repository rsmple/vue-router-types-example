import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerBlog = {
  path: '/blog',
  component: RouterView,
  children: [
    {
      path: 'posts/:postId',
      component: RouterView,
      children: [
        {
          path: 'edit',
          component: RouterView,
        },
        {
          path: 'comments/:commentId',
          component: RouterView,
        },
      ],
    },
    {
      path: 'categories/:categoryId',
      component: RouterView,
      children: [
        {
          path: 'posts/:postId',
          component: RouterView,
        },
      ],
    },
  ],
} as const satisfies RouteRecordRaw
