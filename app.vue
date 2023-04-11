<script setup lang="ts">
import { useToastStore } from "@/store/toast";

const toastStore = useToastStore();
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
    <p>init</p>
    {{ toastStore.name }}
  </div>
</template>
