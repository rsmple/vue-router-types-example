<template>
  <div>
    <RouterLink
      :to="{name: RouteName.PRODUCT_LIST, query: {}}"
    />
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import {RouteName} from './utils/RouteName'
</script>

<style>
</style>
