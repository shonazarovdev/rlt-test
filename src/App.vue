<script setup>
import { Footer, Inventory, Profile } from "@modules";
</script>

<template>
  <div class="max-w-[850px] mx-auto p-8 min-h-screen flex flex-col gap-6">
    <div class="flex-1 flex gap-6 max-h-[500px]">
      <div class="basis-1/3">
        <Profile />
      </div>
      <div class="basis-2/3">
        <Inventory />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
