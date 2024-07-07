import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerProducts = {
  path: '/products',
  component: RouterView,
  children: [
    {
      path: 'list/:categoryId',
      component: RouterView,
    },
    {
      path: 'details',
      component: RouterView,
      children: [
        {
          path: ':productId',
          component: RouterView,
          children: [
            {
              path: 'reviews/:reviewId/comments/:commentId',
              component: RouterView,
            },
          ],
        },
      ],
    },
    {
      path: 'compare/:productId1/:productId2',
      component: RouterView,
    },
  ],
} as const satisfies RouteRecordRaw
