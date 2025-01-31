<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";

import { CloseIcon } from "@assets/icons/index.js";

const props = defineProps({
  item: [Object, null],
  open: Boolean,
});

const emit = defineEmits(["close", "delete"]);

const quantity = ref(0);

watch(
  () => props.item.count,
  (newItem) => {
    quantity.value = newItem ? newItem : 1;
  },
);

const saveItem = () => {
  const newItem = { ...props.item, count: quantity.value };
  console.log(newItem);
  emit("delete", newItem);
};
</script>

<template>
  <div
    :class="[
      {
        'right-0': props.open,
        '-right-full': !props.open,
      },
      'transition-all absolute top-0 bottom-0 w-1/2 dark:bg-dark_secondary z-10 border dark:border-dark_border',
    ]"
  >
    <div class="w-full h-full p-4">
      <button
        role="button"
        @click="$emit('close')"
        class="absolute top-2 right-2"
      >
        <CloseIcon />
      </button>

      <div
        class="w-full flex items-center justify-center border-b dark:border-dark_border py-[30px]"
      >
        <img :src="props.item?.src" alt="" />
      </div>

      <div class="pb-6 border-b dark:border-dark_border">
        <div role="status" class="w-full animate-pulse mt-5">
          <div
            class="h-6 bg-gray-200 rounded-lg dark:bg-white/10 w-[90%] mx-auto mb-6"
          ></div>
          <div
            class="h-[10px] bg-gray-200 rounded-full dark:bg-white/10 w-[70%] mx-auto mb-4"
          ></div>
          <div
            class="h-[10px] bg-gray-200 rounded-full dark:bg-white/10 w-[85%] mx-auto mb-4"
          ></div>
          <div
            class="h-[10px] bg-gray-200 rounded-full dark:bg-white/10 w-[30%] mx-auto"
          ></div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div>
        <input
          type="number"
          v-model="quantity"
          class="border border-gray-300 p-2 rounded dark:bg-dark_secondary dark:text-white"
        />
        <button
          @click="saveItem"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Сохранить
        </button>
        <button @click="$emit('close')" class="bg-gray-200 px-4 py-2 rounded">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
