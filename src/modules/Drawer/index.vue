<script setup>
import { AskToDelete } from "@components";
import { defineEmits, defineProps, ref, watch } from "vue";

import { CloseIcon } from "@assets/icons";

const props = defineProps({
  item: [Object, null],
  open: Boolean,
});

const emit = defineEmits(["close", "delete"]);

const confirmDelete = ref(false);

const handleConfirmDelete = (value) => {
  confirmDelete.value = value;
};

const quantity = ref(0);

watch(
  () => props.item.count,
  (newItem) => {
    quantity.value = newItem ? newItem : 0;
  },
);

const saveItem = () => {
  const newItem = { ...props.item, count: quantity.value };
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
      'transition-all absolute top-0 bottom-0 w-1/2 bg-light_secondary dark:bg-dark_secondary z-10 border dark:border-dark_border',
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
        class="w-full flex items-center justify-center py-[30px] border-b dark:border-dark_border"
      >
        <img :src="props.item?.src" alt="" />
      </div>

      <div class="pb-6">
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

      <AskToDelete v-if="!confirmDelete" @confirm="handleConfirmDelete" />

      <div
        v-else
        class="absolute bottom-0 right-0 left-0 border-t dark:border-dark_border px-4 py-[18px]"
      >
        <input
          type="number"
          v-model="quantity"
          class="border dark:border-dark_border w-full h-10 py-[10px] px-3 rounded dark:bg-dark_secondary dark:text-white mb-5"
        />
        <div class="flex items-center justify-between">
          <button
            @click="$emit('close')"
            class="transition-all bg-light_primary dark:bg-white dark:text-black text-sm px-4 py-2 rounded"
          >
            Отмена
          </button>
          <button
            @click="saveItem"
            class="transition-all bg-delete hover:bg-delete/80 text-sm text-white font-bold py-2 px-4 rounded"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
