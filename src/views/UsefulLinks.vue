<template>
  <div>
    <div class="flex flex-row space-x-3 mb-5">
      <button @click="switchLang('fr')">FR</button>
      <button @click="switchLang('en')">EN</button>
    </div>
    <p>This project comes with several pre-installed libraries :</p>
    <ul>
      <li>{{ tl('VITE') }} {{ t('USEFUL_LINKS.VITE') }}</li>
      <li>{{ tl('VUE_3') }} {{ t('USEFUL_LINKS.VUE_3') }}</li>
      <li>{{ tl('TYPESCRIPT') }} {{ t('USEFUL_LINKS.TYPESCRIPT') }}</li>
      <li>Pinia : {{ t('USEFUL_LINKS.PINIA') }}</li>
      <li>Vue-router: {{ t('USEFUL_LINKS.PINIA') }}</li>
      <li>Tailwind CSS : {{ t('USEFUL_LINKS.VUE_ROUTER') }}</li>
      <li>Font Awesome : {{ t('USEFUL_LINKS.VITE') }}</li>
      <li>I18n : {{ t('USEFUL_LINKS.VITE') }}</li>
      <li>Zod : {{ t('USEFUL_LINKS.VITE') }}</li>
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
    "VITE": "Vite:",
    "VUE_3": "Vue 3:",
    "TYPESCRIPT": "Typescript:"
  },
  "fr": {
    "VITE": "Vite :",
    "VUE_3": "Vue 3 :",
    "TYPESCRIPT": "Typescript :"
  }
}
</i18n>
