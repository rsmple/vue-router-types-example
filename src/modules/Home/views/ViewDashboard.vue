<template>
  Dashboard. {{ route.query }}

  <RouterLink
    :to="{
      name: RouteName.PRODUCT_LIST,
    }"
  >
    Products
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.BLOG,
    }"
  >
    Blog
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.PROFILE,
    }"
  >
    Profile
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.SETTINGS,
    }"
  >
    Settings
  </RouterLink>

  <RouterLink
    :to="{
      name: RouteName.ADMIN,
    }"
  >
    Admin
  </RouterLink>
</template>

<script lang="ts" setup>
import {RouteName} from '@/utils/RouteName'
import {useRoute} from 'vue-router'

const route = useRoute<RouteName.DASHBOARD>()

</script>