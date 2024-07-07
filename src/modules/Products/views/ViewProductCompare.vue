<template>
  Product compare. productId1: {{ route.params.productId1 }}, productId2: {{ route.params.productId2 }}
</template>

<script lang="ts" setup>
import type {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.PRODUCT_COMPARE>()

</script>