<template>
  <font-awesome-icon :icon="[weight, icon]" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
  weight: { type: String, default: 'far' },
  icon: { type: String, default: 'circle-play' }
});
</script>
