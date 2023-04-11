<script setup lang="ts">
import { IOSPWAModal } from "@/components/atoms";
import { useModal } from "vue-final-modal"; // 引入彈跳視窗
const IOSModal = useModal({
  component: IOSPWAModal,
});
</script>

<template>
  <div class="w-10 h-10 bg-slate-100">aaa</div>
  <p class="font-bold text-slate-500 text-lg">init</p>
  <p>SSSS</p>
  <button
    @click="
      () => {
        IOSModal.open();
      }
    "
  >
    222
  </button>
</template>
