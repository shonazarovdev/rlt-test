<script setup>
import { ProfileInfo, ProfilePicture } from "@components";
</script>

<template>
  <div
    class="h-full bg-light_secondary dark:bg-dark_secondary rounded-xl border dark:border-dark_border overflow-hidden pt-[18px] px-[14px] pb-6"
  >
    <ProfilePicture />
    <ProfileInfo />
  </div>
</template>

<style scoped></style>
