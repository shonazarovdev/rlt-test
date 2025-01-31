<script setup>
import { computed } from "vue";

const themeLabel = computed(() => localStorage.getItem("color-theme"));
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" />
    <div
      class="relative w-11 h-6 dark:bg-dark_primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
    ></div>
    <span
      class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
    >
      {{ themeLabel }}
    </span>
  </label>
</template>

<style scoped></style>
