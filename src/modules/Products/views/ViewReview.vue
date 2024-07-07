<template>
  Review. productId: {{ route.params.productId }}, reviewId: {{ route.params.reviewId }}

  <RouterLink
    v-for="commentId in 4"
    :key="commentId"
    :to="{
      name: RouteName.REVIEW_COMMENT,
      params: {
        productId: route.params.productId,
        reviewId: route.params.reviewId,
        commentId,
      }
    }"
  >
    View Comment {{ commentId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.PRODUCT,
      params: {
        productId: route.params.productId
      }
    }"
  >
    Back to product
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.REVIEW>()
</script>