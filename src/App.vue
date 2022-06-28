<template>
  <TheHeader />
  <router-view> </router-view>
  <TheFooter />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap')
html, body
  font-family: 'Source Sans Pro', sans-serif
</style>
<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
const store = useUserStore();
store.getFavUsers();
</script>
