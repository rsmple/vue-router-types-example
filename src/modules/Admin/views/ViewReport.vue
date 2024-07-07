<template>
  Report. reportId: {{ route.params.reportId }}

  <RouterLink
    :to="{
      name: RouteName.REPORT_LIST,
    }"
  >
    Back to reports
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.REPORT>()
</script>