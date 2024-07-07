<template>
  Blog. {{ route.query }}

  <RouterLink
    v-for="postId in 4"
    :key="postId"
    :to="{
      name: RouteName.POST,
      params: {
        postId,
      }
    }"
  >
    View post {{ postId }}
  </RouterLink>

  <RouterLink
    v-for="categoryId in 4"
    :key="categoryId"
    :to="{
      name: RouteName.CATEGORY,
      params: {
        categoryId,
      }
    }"
  >
    View category {{ categoryId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.DASHBOARD,
    }"
  >
    Back to dashboard
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.BLOG>()

</script>