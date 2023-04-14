<script setup></script>

<script>
export default {
  name: "VueBar",
};
</script>

<template>
  <!-- 登入頁 -->
  <div class="center flex-col w-full h-full max-w-md">
    <div class="w-full h-12 bg-blue"></div>
    <div class="w-full h-[calc(100%-96px)]">
      <slot></slot>
    </div>
    <div class="w-full h-12 bg-blue"></div>
  </div>
</template>
