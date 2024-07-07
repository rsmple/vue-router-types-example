<template>
  Role Permission. roleId: {{ route.params.roleId }}, permissionId: {{ route.params.permissionId }}

  <RouterLink
    :to="{
      name: RouteName.ROLE,
      params: {
        roleId: route.params.roleId,
      }
    }"
  >
    Back to role
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.ROLE_PERMISSION>()
</script>