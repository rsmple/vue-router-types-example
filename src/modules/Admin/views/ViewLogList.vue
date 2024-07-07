<template>
  Logs. {{ route.name }}

  <RouterLink
    v-for="logId in 4"
    :key="logId"
    :to="{
      name: RouteName.LOG,
      params: {
        logId,
      }
    }"
  >
    View report {{ logId }}
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.ADMIN,
    }"
  >
    Back to admin
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.LOG_LIST>()
</script>