<script setup>
import { ModalsContainer } from "vue-final-modal";
import { watch } from "vue";
import { usePreferredDark } from "@vueuse/core";
import { InitPwa } from "@/components/atoms";
import { ToastList } from "@/components/organisms";
import { useToastStore } from "@/store/toast";
const ToastStore = useToastStore();
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
  <div class="w-full h-full center flex-col">
    <VitePwaManifest />
    <NuxtPage />
    <ModalsContainer />
    <InitPwa />
    <ToastList :toast-array="ToastStore.toast" />
  </div>
</template>
