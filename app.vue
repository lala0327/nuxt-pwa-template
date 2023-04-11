<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
    <ModalsContainer />
    <div class="w-10 h-10 bg-yellow-100">aaa</div>
    <p class="font-bold text-slate-500 text-lg">init</p>
  </div>
</template>
