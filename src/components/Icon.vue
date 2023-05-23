<template>
  <font-awesome-icon :icon="[weight, icon]" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface Props {
  weight?: 'fas' | 'far' | 'fal' | 'fab';
  icon?: string;
}

const { weight = 'far', icon = 'circle-play' } = defineProps<Props>();
</script>
