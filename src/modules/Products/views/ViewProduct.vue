<template>
  Product. {{ route.params.productId }}

  <RouterLink
    v-for="reviewId in 4"
    :key="reviewId"
    :to="{
      name: RouteName.REVIEW,
      params: {
        productId: route.params.productId,
        reviewId,
      }
    }"
  >
    View review {{ reviewId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.PRODUCT_LIST,
    }"
  >
    Back to products
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.PRODUCT>()

</script>