<template>
  <div class="absolute inset-0 pt-20">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Header from '#/Header.vue';
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  @apply w-full h-full;
}

#app {
  @apply absolute inset-0;
}
</style>

<style lang="scss" scoped>
a {
  @apply bg-orange-700 text-slate-50 px-3 py-2 rounded;
}
</style>
