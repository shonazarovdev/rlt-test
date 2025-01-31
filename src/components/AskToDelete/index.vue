<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["confirm"]);
</script>

<template>
  <div
    class="absolute bottom-0 right-0 left-0 border-t dark:border-dark_border px-4 py-[18px]"
  >
    <button
      role="button"
      class="w-full py-[11px] rounded-lg bg-delete dark:text-white"
      @click="$emit('confirm', true)"
    >
      Удалить предмет
    </button>
  </div>
</template>

<style scoped></style>
