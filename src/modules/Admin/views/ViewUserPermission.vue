<template>
  User Permission. userId: {{ route.params.userId }}, permissionId: {{ route.params.permissionId }}

  <RouterLink
    :to="{
      name: RouteName.USER,
      params: {
        userId: route.params.userId,
      }
    }"
  >
    Back to role
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.USER_PERMISSION>()
</script>