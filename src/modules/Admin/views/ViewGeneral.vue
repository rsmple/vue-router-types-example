<template>
  General. {{ route.name }}

  <RouterLink
    :to="{
      name: RouteName.ROLE_LIST,
    }"
  >
    Roles
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

const route = useRoute<RouteName.GENERAL>()

</script>