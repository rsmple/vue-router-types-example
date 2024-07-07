<template>
  Product compare. productId1: {{ route.params.productId1 }}, productId2: {{ route.params.productId2 }}

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

const route = useRoute<RouteName.PRODUCT_COMPARE>()

</script>