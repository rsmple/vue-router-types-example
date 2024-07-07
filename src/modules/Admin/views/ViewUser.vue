<template>
  User. userId: {{ route.params.userId }}

  <RouterLink
    v-for="permissionId in 4"
    :key="permissionId"
    :to="{
      name: RouteName.USER_PERMISSION,
      params: {
        userId: route.params.userId,
        permissionId,
      }
    }"
  >
    View permission {{ permissionId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.USER_LIST,
    }"
  >
    Back to users
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.USER>()
</script>