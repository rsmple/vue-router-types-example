<template>
  Language. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.PREFERENCES,
    }"
  >
    Back to preferences
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.LANGUAGE>()

</script>