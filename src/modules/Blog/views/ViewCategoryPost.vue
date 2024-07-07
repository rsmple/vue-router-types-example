<template>
  Category Post. categoryId: {{ route.params.categoryId }}, postId: {{ route.params.postId }}

  <RouterLink
    :to="{
      name: RouteName.CATEGORY,
      params: {
        categoryId: route.params.categoryId,
      }
    }"
  >
    Back to category
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.CATEGORY_POST>()
</script>