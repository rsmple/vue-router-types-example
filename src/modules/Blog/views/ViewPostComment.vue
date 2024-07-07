<template>
  Post Comment. postId: {{ route.params.postId }}, commentId: {{ route.params.commentId }}

  <RouterLink
    :to="{
      name: RouteName.POST,
      params: {
        postId: route.params.postId,
      }
    }"
  >
    Back to post
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.POST_COMMENT>()
</script>