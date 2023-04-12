<script setup>
import { VueButton } from "@/components/atoms";
const router = useRouter();
const test = () => {
  router.push("/");
};
</script>

<script>
export default {
  name: "index",
};
</script>

<template>
  <div>
    <VueButton @click="test">測試router</VueButton>
  </div>
</template>
