<script setup lang="ts">
import { useDefaultStore } from "@/store/default";
const defaultStore = useDefaultStore();
const downBarIcons = [
  { icon: "fa-solid fa-clipboard-list", url: "/plan" },
  { icon: "fa-solid fa-gift", url: "/gift" },
  { icon: "fa-solid fa-bullhorn", url: "/board" },
  { icon: "fa-solid fa-gear", url: "/setting" },
];
</script>

<script lang="ts">
export default {
  name: "VueBar",
};
</script>

<template>
  <div class="center flex-col w-full h-full max-w-md bg-tertiary/30">
    <!-- Up Bar -->
    <div
      class="w-full h-10 flex justify-between items-center px-3 shadow-[0px_-4px_16px_4px_rgba(0,0,0,0.1)]"
    >
      <slot name="UpBar"></slot>
      <!-- 返回建 -->
      <font-awesome-icon
        v-if="!$slots.UpBar"
        icon="fa-solid fa-angle-left"
        class="text-3xl"
      />
      <!-- 名稱 -->
      <p v-if="!$slots.UpBar" class="text-xl font-semibold">
        {{ defaultStore.name }}
      </p>
    </div>
    <!-- Content -->
    <div class="w-full h-[calc(100%-96px)]">
      <slot></slot>
    </div>
    <!-- Down Bar -->
    <div
      class="flex h-14 w-full items-center justify-around text-2xl shadow-[0px_-4px_16px_4px_rgba(0,0,0,0.1)]"
    >
      <div
        v-for="item in downBarIcons"
        :key="item.icon"
        class="center flex-col"
      >
        <font-awesome-icon
          :icon="item.icon"
          class="cursor-pointer pb-2 transition-all active:scale-125"
          @click="$router.push(item.url)"
        />
        <div
          v-if="$route.path.includes(item.url.slice(0, 10))"
          class="w-1 h-1 rounded-full bg-[var(--bg-reverse-color)]"
        ></div>
      </div>
    </div>
  </div>
</template>
