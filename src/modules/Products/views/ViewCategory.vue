<template>
  Category. {{ route.params.categoryId }}

  <RouterLink
    v-for="productId in 4"
    :key="productId"
    :to="{
      name: RouteName.PRODUCT,
      params: {
        productId,
      }
    }"
  >
    View product {{ productId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.DASHBOARD,
    }"
  >
    Back to Home
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.CATEGOGY>()
</script>