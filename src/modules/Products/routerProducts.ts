import {RouteName} from '@/utils/RouteName'
import {RouterView, type RouteRecordRaw} from 'vue-router'

export type QueryParamsProductsList = {
  searchTerm?: string
  minPrice?: string
  maxPrice?: string
  availability?: string
  rating?: string
  sortBy?: string
}

export type QueryParamsProduct = {
  ratingFilter?: string
  sortBy?: string
}

export type QueryParamsProductsCompare = {
  showDifferencesOnly?: string
  compareSpecs?: string
}

export const routerProducts = {
  path: '/products',
  children: [
    {
      path: '',
      name: RouteName.PRODUCT_LIST,
      component: RouterView,
      meta: {
        defaultQueryParams: {sortBy: 'date'} as QueryParamsProductsList,
      },
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
          meta: {
            defaultQueryParams: {} as QueryParamsProduct,
          },
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
      meta: {
        defaultQueryParams: {} as QueryParamsProductsCompare,
      },
    },
  ],
} as const satisfies RouteRecordRaw
