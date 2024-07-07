<template>
  Admin. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.USER_LIST,
    }"
  >
    Users
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.REPORT_LIST,
    }"
  >
    Reports
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.LOG_LIST,
    }"
  >
    Logs
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.GENERAL,
    }"
  >
    General
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.DASHBOARD,
    }"
  >
    Back to dashboard
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.ADMIN>()

</script>