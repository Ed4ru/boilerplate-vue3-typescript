<template>
  <div>
    <div class="flex flex-row space-x-3 mb-5">
      <button @click="switchLang('fr')">FR</button>
      <button @click="switchLang('en')">EN</button>
    </div>
    <p>This project comes with several pre-installed libraries :</p>
    <ul>
      <li>Vite{{ tl('DOTS') }}{{ t('USEFUL_LINKS.VITE') }}</li>
      <li>Vue 3{{ tl('DOTS') }}{{ t('USEFUL_LINKS.VUE_3') }}</li>
      <li>TypeScript{{ tl('DOTS') }}{{ t('USEFUL_LINKS.TYPESCRIPT') }}</li>
      <li>Pinia{{ tl('DOTS') }}{{ t('USEFUL_LINKS.PINIA') }}</li>
      <li>Vue-router{{ tl('DOTS') }}{{ t('USEFUL_LINKS.VUE_ROUTER') }}</li>
      <li>Tailwind CSS{{ tl('DOTS') }}{{ t('USEFUL_LINKS.TAILWIND_CSS') }}</li>
      <li>Font Awesome{{ tl('DOTS') }}{{ t('USEFUL_LINKS.FONT_AWESOME') }}</li>
      <li>I18n{{ tl('DOTS') }}{{ t('USEFUL_LINKS.I18N') }}</li>
      <li>Zod{{ tl('DOTS') }}{{ t('USEFUL_LINKS.ZOD') }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { i18n } from '@/services/i18n';

const { t } = i18n.global;
const { t: tl } = useI18n({ inheritLocale: true, useScope: 'local' });

const switchLang = (locale: 'en' | 'fr') => {
  i18n.global.locale.value = locale;
};
</script>

<style lang="scss" scoped>
button {
  @apply bg-orange-600 px-2 py-1;
}

li {
  @apply text-orange-700;
}
</style>

<i18n>
{
  "en": {
    "DOTS": ": "
  },
  "fr": {
    "DOTS": " : "
  }
}
</i18n>
