<template>
  <div class="flex flex-row items-center space-x-2">
    <button
      @click="localeSwitch('fr')"
      :class="{ active: currentLocale == 'fr' }"
    >
      FR
    </button>
    <button
      @click="localeSwitch('en')"
      :class="{ active: currentLocale == 'en' }"
    >
      EN
    </button>
  </div>
</template>

<script lang="ts" setup>
import { i18n } from '@/services/i18n';

const currentLocale = i18n.global.locale;
const localeSwitch = (locale: 'fr' | 'en') => {
  currentLocale.value = locale;
};
</script>

<style lang="scss" scoped>
button {
  @apply text-slate-500;
  @apply hover:text-blue-300;
}

.active {
  @apply text-blue-300;
}
</style>
