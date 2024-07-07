<template>
  Security. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.ACCOUNT,
    }"
  >
    Back to account
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.SECURITY>()

</script>