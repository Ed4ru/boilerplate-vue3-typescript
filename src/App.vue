<template>
  <div class="flex flex-col items-center">
    <h1 class="text-slate-600 font-bold text-3xl my-5">
      Vue 3 + TS Project Boilerplate
    </h1>
    <div class="flex flex-row space-x-3 mb-10">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Useful Links' }">Useful Links</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  @apply w-full h-full;
}

#app {
  @apply absolute inset-0 flex flex-col items-center;
}
</style>

<style lang="scss" scoped>
a {
  @apply bg-orange-700 text-slate-50 px-3 py-2 rounded;
}
</style>
