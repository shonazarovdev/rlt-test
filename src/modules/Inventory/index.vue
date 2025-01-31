<script setup>
import { ref } from "vue";

const inventory = ref([
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
]);
let draggedItem = null;
let draggedItemRow = null;
let draggedItemCol = null;

const dragStart = (item, _, rowIndex, colIndex) => {
  draggedItem = item;
  draggedItemRow = rowIndex;
  draggedItemCol = colIndex;
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
</script>

<template>
  <table
    class="rounded-xl overflow-hidden border dark:border-dark_border dark:bg-dark_secondary"
  >
    <tr
      v-for="(row, rowIndex) in inventory"
      :key="rowIndex"
      class="h-[100px] grid grid-cols-5"
    >
      <td
        v-for="(item, colIndex) in row"
        :key="colIndex"
        @dragstart="dragStart(item, $event, rowIndex, colIndex)"
        @dragover="dragOver"
        @drop="drop(item, rowIndex, colIndex)"
        draggable="true"
        :class="[
          {
            'cursor-grab active:cursor-grabbing': item !== null,
            'active:p-4 active:rounded-xl active:dark:bg-white/10':
              item !== null,
          },
          'flex items-center justify-center border dark:border-dark_border relative size-[100px]',
        ]"
      >
        <div
          class="relative before:[*] before:w-full before:h-full before:absolute before:top-0 before:left-0 select-none pointer-events-none"
        >
          <img
            v-if="item"
            class="-z-10 size-[54px]"
            :src="item.src"
            alt="Item"
          />
        </div>
        <span
          :class="[
            {
              'absolute bottom-0 right-0 text-[10px] font-medium dark:text-white/40 p-1 size-4 flex items-center border-t-2 border-l-2 dark:border-dark_border rounded-ss-md':
                item !== null,
            },
            'pointer-events-none',
          ]"
        >
          {{ item?.count }}
        </span>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
