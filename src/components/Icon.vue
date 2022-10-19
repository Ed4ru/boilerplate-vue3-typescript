<template>
  <font-awesome-icon :icon="[iconWeight, icon]" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
  icon: { type: String, default: 'circle-play' },
  iconWeight: { type: String, default: 'far' }
});
</script>
