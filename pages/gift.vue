<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "MainIndex",
};
</script>

<template>
  <NuxtLayout name="vue-bar">
    <template #UpBar>
      <div></div>
      <div class="center"></div>
      <div></div>
    </template>
    <!-- Content -->
    <div class="w-full h-auto relative center flex-col py-5"></div>
  </NuxtLayout>
</template>
