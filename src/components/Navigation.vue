<template>
  <nav>
    <ul class="flex flex-row space-x-2">
      <li v-for="(link, index) in navigationLinks" :key="index">
        <RouterLink :to="{ name: link.pathName }">
          {{ t(link.name) }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { i18n } from '@/services/i18n';

const { t } = i18n.global;

const navigationLinks = [
  {
    pathName: 'Home',
    name: 'NAVIGATION.HOME'
  },
  {
    pathName: 'Useful Links',
    name: 'NAVIGATION.USEFUL_LINKS'
  },
  {
    pathName: 'Form',
    name: 'NAVIGATION.FORM'
  }
];
</script>

<style lang="scss" scoped>
a {
  @apply px-4 py-3 rounded;
  @apply bg-blue-50/10 text-blue-100;
  @apply hover:bg-blue-50/20;
}

.router-link-active {
  @apply text-blue-300;
}
</style>
