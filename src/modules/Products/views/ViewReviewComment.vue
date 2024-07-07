<template>
  Review comment. productId: {{ route.params.productId }}, reviewId: {{ route.params.reviewId }}, commentId: {{ route.params.commentId }}

  <RouterLink
    :to="{name: RouteName.REVIEW, params: {productId: route.params.productId, reviewId: route.params.reviewId}}"
  >
    Back to review
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.REVIEW_COMMENT>()
</script>