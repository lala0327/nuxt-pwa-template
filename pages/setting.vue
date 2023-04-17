<script setup lang="ts">
import { useDefaultStore } from "@/store/default";
import { VueButton } from "@/components/atoms";

const defaultStore = useDefaultStore();
const router = useRouter();

const logOut = () => {
  defaultStore.setName("");
  router.push("/");
};
</script>

<script lang="ts">
export default {
  name: "Setting",
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
    <div class="w-full h-auto relative center flex-col py-5">
      <VueButton @click="logOut">登出</VueButton>
    </div>
  </NuxtLayout>
</template>
