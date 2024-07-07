<template>
  Post. categoryId: {{ route.params.postId }}

  <RouterLink
    v-for="commentId in 4"
    :key="commentId"
    :to="{
      name: RouteName.POST_COMMENT,
      params: {
        postId: route.params.postId,
        commentId,
      }
    }"
  >
    View comment {{ commentId }}
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

const route = useRoute<RouteName.POST>()
</script>