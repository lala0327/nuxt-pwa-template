<script setup>
import { ModalsContainer } from "vue-final-modal";
import { InitPwa } from "@/components/atoms";
import { ToastList } from "@/components/organisms";
import { usePreferredDark } from "@vueuse/core";
import { useToastStore } from "@/store/toast";
import { watch } from "vue";
const toastStore = useToastStore();
const customTheme = usePreferredDark(); // 使用者目前主題模式
watch(
  customTheme,
  (newValue) => {
    if (newValue) {
      // Dark
      document.documentElement.classList.add("dark");
    } else {
      // Light
      document.documentElement.classList.remove("dark");
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <VitePwaManifest />
  <div class="flex h-full w-full flex-col items-center justify-center">
    <NuxtPage />{{ customTheme }}
  </div>
  <ModalsContainer />
  <InitPwa />
  <ToastList :toastArray="toastStore.toast"></ToastList>
</template>
