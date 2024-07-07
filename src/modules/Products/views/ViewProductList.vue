<template>
  Product List. sortBy: {{ route.query.sortBy }}
</template>

<script lang="ts" setup>
import type {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.PRODUCT_LIST>()
</script>