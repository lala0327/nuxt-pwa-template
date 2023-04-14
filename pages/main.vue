<script setup>
// import { VueButton } from "@/components/atoms";
// import { useDefaultStore } from "@/store/default";
import { VueBar, PlanBox } from "@/components/template";
// const defaultStore = useDefaultStore();
// const router = useRouter();

// const test = () => {
//   router.push("/");
// };

// const clear = () => {
//   defaultStore.setName("");
// };

const { data } = await useFetch("/api/place");
</script>

<script>
export default {
  name: "Index",
};
</script>

<template>
  <VueBar>
    <div class="w-full h-full overflow-y-auto overflow-x-hidden p-3">
      <!-- {{defaultStore.name}}
    <VueButton @click="test">測試router</VueButton>
    <VueButton @click="clear">測試clear</VueButton> -->
      <div v-for="plan in data.statusMessage" :key="plan">
        <PlanBox class="my-3" :data="plan"></PlanBox>
      </div>
      <!-- {{data}} -->
    </div>
  </VueBar>
</template>
