<template>
  Roles. {{ route.query }}

  <RouterLink
    v-for="roleId in 4"
    :key="roleId"
    :to="{
      name: RouteName.ROLE,
      params: {
        roleId,
      }
    }"
  >
    View role {{ roleId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.GENERAL,
    }"
  >
    Back to general
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.ROLE_LIST>()
</script>