<template>
  Account. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.SECURITY,
    }"
  >
    Security
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.NOTIFICATIONS,
    }"
  >
    Notifications
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.SETTINGS,
    }"
  >
    Back to settings
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.PREFERENCES>()

</script>