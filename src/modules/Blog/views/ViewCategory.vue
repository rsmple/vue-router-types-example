<template>
  Category. categoryId: {{ route.params.categoryId }}

  <RouterLink
    v-for="postId in 4"
    :key="postId"
    :to="{
      name: RouteName.CATEGORY_POST,
      params: {
        categoryId: route.params.categoryId,
        postId,
      }
    }"
  >
    View post {{ postId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.BLOG,
    }"
  >
    Back to blog
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.CATEGORY>()
</script>