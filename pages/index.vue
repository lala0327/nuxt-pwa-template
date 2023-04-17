<script setup>
import { ref, onMounted } from "vue";
// import { useToastStore } from "@/store/toast";
// import { usePwaStore } from "@/store/pwa";
import { useDefaultStore } from "@/store/default";
import { VueButton } from "@/components/atoms";

const router = useRouter();
// store
// const toastStore = useToastStore();
// const pwaStore = usePwaStore();
const defaultStore = useDefaultStore();
// ref
const selected = ref();

onMounted(() => {
  if (defaultStore.name) {
    router.push("/main");
  }
  selected.value = "精緻喵喵";
});

// const test = () => {
//   toastStore.dismissToast("pwaInstallMsg");
//   toastStore.fireToast({
//     id: "pwaInstallMsg",
//     title: "安裝網頁APP到設備上",
//     text: "可加速網頁開啟, 並提供離線操作",
//     variant: "info",
//     action: () => {
//       pwaStore.deferredPrompt?.prompt();
//       toastStore.dismissToast("pwaInstallMsg");
//     },
//   });
// };

const getSeleted = (selected) => {
  defaultStore.setName(selected);
  router.push("/plan");
};

// const { data: data } = await useFetch("/api/place");
</script>

<script>
export default {
  name: "IndexPage",
};
</script>

<template>
  <!-- 登入頁 -->
  <div class="center flex-col w-32">
    <!-- data 顯示測試1：{{ data }}
    <div class="p-3 border m-3">
      <NuxtLink to="main">測試 NuxtLink</NuxtLink>
    </div>
    <VueButton @click="test" color="outline">測試安裝</VueButton>
    version:0.1 -->
    <select
      v-model="selected"
      class="border border-[var(--border-color)] w-full py-1 rounded-md text-secondary"
    >
      <option value="精緻喵喵">精緻喵喵</option>
      <option value="課金喵喵">課金喵喵</option>
      <option value="被被喵喵">被被喵喵</option>
    </select>

    <VueButton class="my-5 w-full" @click="getSeleted(selected)">
      確認進入
    </VueButton>
  </div>
</template>
