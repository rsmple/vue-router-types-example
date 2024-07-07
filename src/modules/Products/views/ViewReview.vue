<template>
  Review. productId: {{ route.params.productId }}, reviewId: {{ route.params.reviewId }}
</template>

<script lang="ts" setup>
import type {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.REVIEW>()
</script>