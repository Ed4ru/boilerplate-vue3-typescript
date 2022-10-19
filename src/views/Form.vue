<template>
  <section class="flex flex-col px-10 py-5 bg-slate-100 h-full">
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('FORM_TITLE') }}
    </h1>
    <form
      @submit.prevent="createUser"
      name="create-user-form"
      class="grid grid-cols-2 gap-2 w-96"
    >
      <div v-for="(value, key) in userData" :key="key">
        <label :for="key">{{ tl(key.toUpperCase()) }}</label>
        <input
          :id="key"
          :type="key != 'id' ? 'string' : 'number'"
          v-model="userData[key]"
        />
      </div>
      <button type="submit">{{ tl('SUBMIT') }}</button>
    </form>
    <h1 class="text-2xl font-semibold text-slate-500 my-5">
      {{ tl('USERS_LIST') }}
    </h1>
    <ul class="flex flex-col space-y-4">
      <li v-for="(user, index) in users" :key="index">
        <UserCard :user="user" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import UserCard from '#/UserCard.vue';

import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useGlobalStore } from '@/store/global';
import { validate } from '@/services/zod';
import { createUserSchema } from '@/validation/createUser';
import { ZodError, ZodInvalidTypeIssue, ZodIssue } from 'zod';

const globalStore = useGlobalStore();
const { t: tl } = useI18n({ inheritLocale: true, useScope: 'local' });

const userData = reactive({
  id: null,
  email: null,
  firstname: null,
  lastname: null
});

interface IFormErrors {
  id: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
}

// const errors: IError[] = reactive([]);
const validationErrors: IFormErrors = reactive({
  id: null,
  firstname: null,
  lastname: null,
  email: null
});

const users = computed(() => globalStore.users);

const createUser = () => {
  try {
    validate(createUserSchema, userData);
  } catch (error) {
    if (error instanceof ZodError) {
      error.issues.forEach((issue) => {
        const path = issue.path[0] as 'id' | 'firstname' | 'lastname' | 'email';
        validationErrors[path] = issue.message as string;
      });
    }
    console.log(validationErrors);
  }
  globalStore.createNewUser(userData);
};
</script>

<style lang="scss" scoped>
form > div {
  @apply flex flex-col;
}

label {
  @apply font-semibold text-slate-500;
}

input {
  @apply px-2 py-1 mb-3 rounded;
}

button {
  @apply bg-blue-500 h-10 col-span-2 text-slate-50 rounded;
  @apply hover:bg-blue-400 active:bg-blue-300;
}
</style>

<i18n locale="fr">
{
  "FORM_TITLE": "Créer un utilisateur",
  "ID": "Id",
  "FIRSTNAME": "Prénom",
  "LASTNAME": "Nom",
  "EMAIL": "Email",
  "SUBMIT": "Créer",
  "USERS_LIST": "Liste des utilisateurs"
}
</i18n>

<i18n locale="en">
{
  "FORM_TITLE": "Create user",
  "ID": "Id",
  "FIRSTNAME": "Firstname",
  "LASTNAME": "Lastname",
  "EMAIL": "Email",
  "SUBMIT": "Create",
  "USERS_LIST": "Users list"
}
</i18n>
