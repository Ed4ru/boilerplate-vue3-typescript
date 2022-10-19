<template>
  <section class="flex flex-col px-10 py-5 bg-slate-100 h-full">
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('TITLES.INTRO') }}
    </h1>
    <p class="text-slate-800 text-lg font-normal">{{ tl('CONTENT.INTRO') }}</p>
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('TITLES.PRO') }}
    </h1>
    <p class="text-slate-800 text-lg font-normal">{{ tl('CONTENT.PRO') }}</p>
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('TITLES.DOCUMENTATION') }}
    </h1>
    <p class="text-slate-800 text-lg font-normal">
      {{ tl('CONTENT.DOCUMENTATION') }}
      <RouterLink :to="{ name: 'Useful Links' }">{{
        tg('NAVIGATION.USEFUL_LINKS')
      }}</RouterLink>
    </p>
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('TITLES.LICENCE') }}
    </h1>
    <p class="text-slate-800 text-lg font-normal">
      {{ tl('CONTENT.LICENCE') }}
      <a href="https://opensource.org/licenses/MIT" target="_blank">{{
        tl('CONTENT.LICENCE_LINK')
      }}</a>
    </p>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { i18n } from '@/services/i18n';

const { t: tg } = i18n.global;
const { t: tl } = useI18n({ inheritLocale: true, useScope: 'local' });
</script>

<style lang="scss" scoped>
a {
  @apply text-blue-500;
}
</style>

<i18n locale="fr">
{
  "TITLES": {
    "INTRO": "Introduction",
    "PRO": "Avantages",
    "DOCUMENTATION": "Documentation",
    "LICENCE": "License",
  },
  "CONTENT": {
    "INTRO": "Ce projet à pour vocation de vous permettre de commencer rapidement à
      développer votre site utilisant Vue 3 en vous offrant une architecture
      \"clés en main\" qui contient les principales librairies conseillées pour
      Vue 3 (Pinia, vue-router) ainsi que d'autres librairies très utiles, voire
      essentielles pour le développement de tout projet sérieux utilisant ce
      framework.",
    "PRO": "Toutes les librairies installées sont pré-configurées et des exemples
      d'utilisation sont présents pour que vous puissiez rapidement intégrer la
      logique des différentes librairies, même si vous ne les connaissez pas
      encore.",
    "DOCUMENTATION": "La documentation relative à chacune des librairies utilisées est
      disponible dans l'onglet ",
    "LICENCE": "Le code est sous license MIT, ce qui signifie que vous avez le droit de
      l'utiliser et de le modifier à votre convenance. Qu'il s'agisse de projets
      personnels ou de plus grosses applications à but commercial. Plus de
      détails sur la licence ",
    "LICENCE_LINK": "ici"
  }
}
</i18n>

<i18n locale="en">
  {
    "TITLES": {
      "INTRO": "Introduction",
      "PRO": "Advantages",
      "DOCUMENTATION": "Documentation",
      "LICENCE": "Licence",
    },
    "CONTENT": {
      "INTRO": "This project aims to allow you to quickly start to develop your Vue 3
        application by giving you an architecture containing the main libraries
        recommended for Vue 3 (Pinia, vue-router) as well as some very useful
        libraries ones, often required in any serious project using this
        framework.",
      "PRO": "All libraries are pre-installed and examples of use are present
        so that you can quickly learn how they work, even if
        it's your first time.",
      "DOCUMENTATION": "The documentation for each of the libraries used is available
        in the tab ",
      "LICENCE": "The code is under the MIT license, which means that you have the right to
        use it and modify it at your convenience. From personal projects to larger
        commercial applications. More details",
      "LICENCE_LINK": "here"
    }
  }
  </i18n>
