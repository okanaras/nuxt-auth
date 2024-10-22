<template>
  <label :class="['block mb-2 text-sm font-medium', customClass, 'text-gray-900 dark:text-white']">
    <slot/>
  </label>
</template>

<script setup>

import {defineProps} from 'vue';

const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
});
</script>