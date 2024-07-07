<template>
  Category. {{ route.params.categoryId }}
</template>

<script lang="ts" setup>
import type {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.CATEGOGY>()
</script>