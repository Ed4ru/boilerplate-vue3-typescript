<template>
  <header>
    <RouterLink :to="{ name: 'Home' }" class="flex flex-row space-x-3">
      <p class="text-slate-100">Vue3 <span>+</span> TS</p>
      <p class="text-blue-300">Starter Pack</p>
    </RouterLink>
    <div class="flex flex-row space-x-10">
      <Navigation />
      <LocaleSwitch />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Navigation from '#/Navigation.vue';
import LocaleSwitch from '#/LocaleSwitch.vue';
</script>

<style lang="scss" scoped>
header {
  @apply absolute left-0 right-0 top-0;
  @apply flex flex-row justify-between items-center;
  @apply bg-slate-900 h-20 px-5 text-xl;
}

p {
  @apply uppercase font-bold;

  span {
    @apply text-blue-300;
  }
}
</style>
