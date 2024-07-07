import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export const routerProducts = {
  path: '/products',
  children: [
    {
      path: '',
      name: RouteName.PRODUCT_LIST,
      component: RouterView,
    },
    {
      path: 'list/:categoryId',
      name: RouteName.CATEGOGY,
      component: RouterView,
    },
    {
      path: 'details/:productId',
      children: [
        {
          path: '',
          name: RouteName.PRODUCT,
          component: RouterView,
        },
        {
          path: 'reviews/:reviewId',
          children: [
            {
              path: '',
              name: RouteName.REVIEW,
              component: RouterView,
            },
            {
              path: 'comments/:commentId',
              name: RouteName.REVIEW_COMMENT,
              component: RouterView,
            },
          ],
        },
      ],
    },
    {
      path: 'compare/:productId1/:productId2',
      name: RouteName.REVIEW_COMPARE,
      component: RouterView,
    },
  ],
} as const satisfies RouteRecordRaw
