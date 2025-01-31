<script setup>
const list = Array(25);
</script>

<template>
  <div
    class="h-full rounded-xl overflow-hidden border-[0.5px] dark:border-dark_border grid grid-cols-5 grid-rows-5"
  >
    <div
      v-for="item in list"
      :key="item"
      class="border-[0.5px] dark:border-dark_border"
    ></div>
  </div>
</template>

<style scoped></style>
