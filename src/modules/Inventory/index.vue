<script setup>
import { Drawer } from "@modules";
import { ref, watch } from "vue";

const LOCAL_STORAGE_KEY = "inventory";

const inventory = ref(
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
    [
      { count: 3, src: "/images/item-1.png" },
      { count: 4, src: "/images/item-2.png" },
      { count: 2, src: "/images/item-3.png" },
      null,
      null,
    ],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
);
let draggedItem = null;
let draggedItemRow = null;
let draggedItemCol = null;

const dragStart = (item, _, rowIndex, colIndex) => {
  draggedItem = item;
  draggedItemRow = rowIndex;
  draggedItemCol = colIndex;
  closeDrawer();
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (_, targetRow, targetCol) => {
  if (draggedItem !== null) {
    if (inventory.value[targetRow][targetCol] === null) {
      inventory.value[targetRow][targetCol] = draggedItem;
      inventory.value[draggedItemRow][draggedItemCol] = null;
    } else {
      const temp = inventory.value[draggedItemRow][draggedItemCol];
      inventory.value[draggedItemRow][draggedItemCol] =
        inventory.value[targetRow][targetCol];
      inventory.value[targetRow][targetCol] = temp;
    }

    draggedItem = null;
    draggedItemRow = null;
    draggedItemCol = null;

    inventory.value = JSON.parse(JSON.stringify(inventory.value));
  }
};

const isDrawerOpen = ref(false);
const selectedItem = ref({ value: null, rowIndex: null, colIndex: null });

const openDrawer = (item, rowIndex, colIndex) => {
  if (item) {
    selectedItem.value = item;
    selectedItem.rowIndex = rowIndex;
    selectedItem.colIndex = colIndex;
    isDrawerOpen.value = true;
  }
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const deleteItem = (newItem) => {
  inventory.value[selectedItem.rowIndex][selectedItem.colIndex] = newItem;
  inventory.value = JSON.parse(JSON.stringify(inventory.value));
  closeDrawer();
};

watch(
  inventory,
  (newInventory) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newInventory));
  },
  { deep: true },
);
</script>

<template>
  <div
    class="h-[350px] md:h-full relative border-2 dark:border-dark_border overflow-hidden rounded-xl"
  >
    <Drawer
      :item="selectedItem"
      @close="closeDrawer"
      @delete="deleteItem"
      :open="isDrawerOpen"
    />
    <table
      class="w-full h-full dark:border-dark_border bg-light_secondary dark:bg-dark_secondary"
    >
      <tr
        v-for="(row, rowIndex) in inventory"
        :key="rowIndex"
        class="w-full h-1/5 grid grid-cols-5"
      >
        <td
          v-for="(item, colIndex) in row"
          :key="colIndex"
          @dragstart="dragStart(item, $event, rowIndex, colIndex)"
          @dragover="dragOver"
          @drop="drop(item, rowIndex, colIndex)"
          draggable="true"
          @click="openDrawer(item, rowIndex, colIndex)"
          :class="[
            {
              'cursor-grab active:cursor-grabbing active:p-4 active:rounded-xl active:dark:bg-white/10 focus-within:bg-white/20':
                item !== null,
            },
            'flex items-center justify-center border-[0.5px] dark:border-dark_border relative',
          ]"
        >
          <div
            class="relative before:[*] before:w-full before:h-full before:absolute before:top-0 before:left-0 select-none pointer-events-none"
          >
            <img
              v-if="item"
              class="-z-10 size-10 md:size-[54px]"
              :src="item.src"
              alt="Item"
            />
          </div>
          <span
            :class="[
              {
                'max-w-[95px] truncate absolute bottom-0 right-0 text-[10px] font-medium text-light_primary_text dark:text-white/40 p-1 bg-light_secondary dark:bg-dark_secondary flex items-center border-t border-l dark:border-dark_border rounded-ss-md':
                  item !== null,
              },
              'pointer-events-',
            ]"
          >
            {{ item?.count }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
