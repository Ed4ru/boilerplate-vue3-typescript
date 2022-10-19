<template>
  <section class="flex flex-col px-10 py-5 bg-slate-100 h-full">
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('GITHUB') }}
    </h1>
    <p class="text-blue-500 text-lg font-normal">
      <a href="https://github.com/Ed4ru/vue3-ts-starter-pack" target="_blank">
        https://github.com/Ed4ru/vue3-ts-starter-pack</a
      >
    </p>
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('DOCUMENTATION') }}
    </h1>
    <ul>
      <li
        v-for="(library, index) in essentialLibraries"
        :key="index"
        class="text-slate-800 text-lg font-normal"
      >
        <a :href="library.link" target="_blank" class="text-blue-500">{{
          library.name
        }}</a>
        -
        <span>{{ tg(library.description) }}</span>
      </li>
    </ul>
    <ul>
      <li
        v-for="(library, index) in coolLibraries"
        :key="index"
        class="text-slate-800 text-lg font-normal"
      >
        <a :href="library.link" target="_blank" class="text-blue-500">{{
          library.name
        }}</a>
        -
        <span>{{ tg(library.description) }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { i18n } from '@/services/i18n';

const { t: tg } = i18n.global;
const { t: tl } = useI18n({ inheritLocale: true, useScope: 'local' });

const essentialLibraries = [
  {
    name: 'Vite',
    link: 'https://vitejs.dev/',
    description: 'USEFUL_LINKS.VITE'
  },
  {
    name: 'Vue 3',
    link: 'https://vuejs.org/',
    description: 'USEFUL_LINKS.VUE_3'
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    description: 'USEFUL_LINKS.TYPESCRIPT'
  },
  {
    name: 'Pinia',
    link: 'https://pinia.vuejs.org/',
    description: 'USEFUL_LINKS.PINIA'
  },
  {
    name: 'Vue-Router',
    link: 'https://router.vuejs.org/',
    description: 'USEFUL_LINKS.VUE_ROUTER'
  }
];

const coolLibraries = [
  {
    name: 'Vitest',
    link: 'https://vitest.dev/',
    description: 'USEFUL_LINKS.VITEST'
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    description: 'USEFUL_LINKS.TAILWIND_CSS'
  },
  {
    name: 'Font Awesome',
    link: 'https://fontawesome.com/',
    description: 'USEFUL_LINKS.FONT_AWESOME'
  },
  {
    name: 'I18n',
    link: 'https://kazupon.github.io/vue-i18n/',
    description: 'USEFUL_LINKS.I18N'
  },
  {
    name: 'Zod',
    link: 'https://zod.dev/',
    description: 'USEFUL_LINKS.ZOD'
  }
];
</script>

<style lang="scss" scoped>
button {
  @apply bg-orange-600 px-2 py-1;
}
</style>

<i18n locale="fr">
{
  "GITHUB": "Github",
  "DOCUMENTATION" : "Documentation"
}
</i18n>

<i18n locale="en">
{
  "GITHUB": "Github",
  "DOCUMENTATION" : "Documentation"
}
</i18n>
