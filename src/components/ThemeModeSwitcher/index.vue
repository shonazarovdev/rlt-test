<script setup>
import { onMounted, ref } from "vue";

import { MoonIcon, SunIcon } from "@assets/icons/index.js";

const LOCAL_STORAGE_KEY = "color-theme";

const isDark = ref(false);

onMounted(() => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  isDark.value = storedTheme === "dark";
  applyTheme(isDark.value);
});

const handleThemeSwitch = () => {
  isDark.value = !isDark.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, isDark.value ? "dark" : "light");
  applyTheme(isDark.value);
};

const applyTheme = (isDarkTheme) => {
  if (isDarkTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-x-2 py-2 px-3 bg-light_primary dark:bg-dark_primary rounded-full text-sm text-light_primary_text dark:text-dark_primary_text hover:bg-light_primary/50 dark:hover:bg-dark_primary/50 focus:outline-none focus:bg-light_primary/50 dark:focus:bg-dark_primary/50"
    @click="handleThemeSwitch"
  >
    <MoonIcon v-if="isDark" />
    <SunIcon v-else />
    {{ isDark ? "Dark" : "Light" }}
  </button>
</template>

<style scoped></style>
