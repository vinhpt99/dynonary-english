<template>
  <v-app class="bg-white">
    <v-container class="max-w-[75%]">
      <header-layout></header-layout>
      <RouterView />
    </v-container>
  </v-app>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderLayout from './layouts/HeaderLayout.vue'

</script>
<style scoped>

</style>
