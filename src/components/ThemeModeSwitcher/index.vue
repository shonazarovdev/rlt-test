<script setup>
import { onMounted, ref } from "vue";

const LOCAL_STORAGE_KEY = "color-theme";

const isDark = ref(false);

onMounted(() => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  isDark.value = storedTheme === "dark";
  applyTheme(isDark.value);
});

const handleThemeSwitch = (e) => {
  isDark.value = e.target.checked;
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
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="isDark"
      class="sr-only peer"
      @change="handleThemeSwitch"
    />
    <div
      class="relative w-11 h-6 bg-light_primary dark:bg-dark_primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
    ></div>
    <span
      class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
    >
      Темная тема
    </span>
  </label>
</template>

<style scoped></style>
