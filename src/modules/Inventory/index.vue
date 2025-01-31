<script setup>
const list = Array(25);
</script>

<template>
  <div
    class="h-full dark:bg-dark_secondary rounded-xl overflow-hidden border-2 dark:border-dark_border grid grid-cols-5 grid-rows-5"
  >
    <div
      v-for="item in list"
      :key="item"
      class="border dark:border-dark_border -m-[1px]"
    ></div>
  </div>
</template>

<style scoped></style>
