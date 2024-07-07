<template>
  Review comment. productId: {{ route.params.productId }}, reviewId: {{ route.params.reviewId }}, commentId: {{ route.params.commentId }}
</template>

<script lang="ts" setup>
import type {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.REVIEW_COMMENT>()
</script>