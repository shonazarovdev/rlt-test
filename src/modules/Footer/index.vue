<script setup>
import { CloseIcon } from "@assets/icons/index.js";

import { ThemeModeSwitcher } from "@components/index.js";
</script>

<template>
  <footer
    class="bg-light_secondary dark:bg-dark_secondary rounded-xl border dark:border-dark_border flex gap-6 p-[18px]"
  >
    <div role="status" class="flex-1 animate-pulse">
      <div class="h-9 bg-gray-200 rounded-lg dark:bg-white/10"></div>
      <span class="sr-only">Loading...</span>
    </div>
    <ThemeModeSwitcher />
    <CloseIcon />
  </footer>
</template>

<style scoped></style>
