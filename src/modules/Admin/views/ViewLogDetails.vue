<template>
  Log details. logId: {{ route.params.logId }}

  <RouterLink
    :to="{
      name: RouteName.LOG,
      params: {
        logId: route.params.logId,
      },
    }"
  >
    Back to log
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.LOG_DETAILS>()
</script>