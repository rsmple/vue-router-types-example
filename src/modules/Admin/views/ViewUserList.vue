<template>
  Users. {{ route.name }}

  <RouterLink
    v-for="userId in 4"
    :key="userId"
    :to="{
      name: RouteName.USER,
      params: {
        userId,
      }
    }"
  >
    View user {{ userId }}
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

const route = useRoute<RouteName.USER_LIST>()
</script>