<template>
  <nav>
    <ul class="flex flex-row space-x-2">
      <li>
        <RouterLink :to="{ name: 'Home' }">
          {{ t('NAVIGATION.HOME') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'Useful Links' }">
          {{ t('NAVIGATION.USEFUL_LINKS') }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { i18n } from '@/services/i18n';

const { t } = i18n.global;
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
