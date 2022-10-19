<template>
  <div class="bg-slate-200 w-96 px-4 py-2 rounded">
    <p class="text-slate-700 flex flex-row items-center space-x-2">
      <span class="text-lg text-slate-400" v-if="user.id">{{ user.id }}</span>
      <span v-if="user.id && user.fullname">-</span>
      <span class="text-xl font-semibold" v-if="user.fullname">{{
        user.fullname
      }}</span>
    </p>
    <p class="italic text-slate-400" v-if="user.email">{{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  user: { type: Object, required: true }
});
</script>
