<template>
  Profile. {{ route.name }}

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

const route = useRoute<RouteName.PROFILE>()

</script>