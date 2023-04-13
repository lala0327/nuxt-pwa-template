<script setup>
import { useToastStore } from "@/store/toast";
import { usePwaStore } from "@/store//pwa";

import { VueButton } from "@/components/atoms";
const toastStore = useToastStore();
const pwaStore = usePwaStore();
const test = () => {
  toastStore.dismissToast("pwaInstallMsg");
  toastStore.fireToast({
    id: "pwaInstallMsg",
    title: "安裝網頁APP到設備上",
    text: "可加速網頁開啟, 並提供離線操作",
    variant: "info",
    action: () => {
      pwaStore.deferredPrompt?.prompt();
      toastStore.dismissToast("pwaInstallMsg");
    },
  });
};

const { data: data } = await useFetch("/api/test");
</script>

<script>
export default {
  name: "IndexPage",
};
</script>

<template>
  <div class="center flex-col">
    data 顯示測試：{{ data }}
    <div class="p-3 border m-3">
      <NuxtLink to="main">測試 NuxtLink</NuxtLink>
    </div>
    <VueButton @click="test" color="outline">測試安裝</VueButton>
    version:0.1
  </div>
</template>
