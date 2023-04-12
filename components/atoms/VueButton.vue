<script setup lang="ts">
// props參數
interface VueButtonProps {
  variant?: "default" | "link"; // 顏色
  color?: "default" | "outline"; // 樣式
  classes?: string;
}

// 預設參數
withDefaults(defineProps<VueButtonProps>(), {
  variant: "default",
  color: "default",
});
</script>

<script lang="ts">
export default {
  name: "VueButton",
};
</script>

<template>
  <button
    class="font-bold transition-all"
    type="button"
    :class="[
      classes,
      variant === 'default'
        ? {
            'center rounded-md p-2 text-xl': true,
            'bg-[var(--bg-reverse-color)] text-[var(--text-reverse-color)] hover:opacity-90 active:ring-2 active:ring-[var(--border-color)]':
              color === 'default',
            'border-2 border-[var(--border-reverse-color)] bg-[var(--bg-color)] hover:opacity-90 active:ring-2 active:ring-[var(--border-color)]':
              color === 'outline',
          }
        : {
            'text-secondary hover:opacity-80': variant === 'link',
          },
    ]"
  >
    <slot></slot>
  </button>
</template>
