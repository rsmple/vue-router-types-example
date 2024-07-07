<template>
  Role. roleId: {{ route.params.roleId }}

  <RouterLink
    v-for="permissionId in 4"
    :key="permissionId"
    :to="{
      name: RouteName.ROLE_PERMISSION,
      params: {
        roleId: route.params.roleId,
        permissionId,
      }
    }"
  >
    View permission {{ permissionId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.ROLE_LIST,
    }"
  >
    Back to roles
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.ROLE>()
</script>