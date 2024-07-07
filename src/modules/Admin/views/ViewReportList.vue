<template>
  Reports. {{ route.name }}

  <RouterLink
    v-for="reportId in 4"
    :key="reportId"
    :to="{
      name: RouteName.REPORT,
      params: {
        reportId,
      }
    }"
  >
    View report {{ reportId }}
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

const route = useRoute<RouteName.REPORT_LIST>()
</script>