<template>
  Log. logId: {{ route.params.logId }}

  <RouterLink
    :to="{
      name: RouteName.LOG_LIST,
    }"
  >
    Back to logs
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.LOG>()
</script>