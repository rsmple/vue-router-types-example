<template>
  Preferences. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.THEME,
    }"
  >
    Theme
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.LANGUAGE,
    }"
  >
    Language
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