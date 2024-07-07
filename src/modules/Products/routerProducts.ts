import {RouteName} from '@/utils/RouteName'
import type {RouteRecordRaw} from 'vue-router'

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
      component: () => import('./views/ViewProductList.vue'),
      meta: {
        defaultQueryParams: {sortBy: 'date'} as QueryParamsProductsList,
      },
    },
    {
      path: 'list/:productCategoryId',
      name: RouteName.PRODUCT_CATEGORY,
      component: () => import('./views/ViewCategory.vue'),
    },
    {
      path: 'details/:productId',
      children: [
        {
          path: '',
          name: RouteName.PRODUCT,
          component: () => import('./views/ViewProduct.vue'),
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
              component: () => import('./views/ViewReview.vue'),
            },
            {
              path: 'comments/:commentId',
              name: RouteName.REVIEW_COMMENT,
              component: () => import('./views/ViewReviewComment.vue'),
            },
          ],
        },
      ],
    },
    {
      path: 'compare/:productId1/:productId2',
      name: RouteName.PRODUCT_COMPARE,
      component: () => import('./views/ViewProductCompare.vue'),
      meta: {
        defaultQueryParams: {} as QueryParamsProductsCompare,
      },
    },
  ],
} as const satisfies RouteRecordRaw
