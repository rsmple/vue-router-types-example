<template>
  Role Permission. roleId: {{ route.params.roleId }}, permissionId: {{ route.params.permissionId }}, userId: {{ route.params.userId }}

  <RouterLink
    v-if="route.name === RouteName.ROLE_PERMISSION"
    :to="{
      name: RouteName.ROLE,
      params: {
        roleId: route.params.roleId,
      }
    }"
  >
    Back to role
  </RouterLink>

  <RouterLink
    v-if="route.name === RouteName.USER_PERMISSION"
    :to="{
      name: RouteName.USER,
      params: {
        userId: route.params.userId,
      }
    }"
  >
    Back to user
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.ROLE_PERMISSION | RouteName.USER_PERMISSION>()
</script>