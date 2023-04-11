<script setup lang="ts">
import { useField } from "vee-validate";
import { ref, toRefs } from "vue";

// props參數
export interface VueInputProps {
  name: string;
  type?: "text" | "password" | "checkbox";
  placeholder?: string;
  inputClass?: string;
  readonly?: boolean; // 是否為唯讀
}

// 預設參數
const props = withDefaults(defineProps<VueInputProps>(), {
  type: "text",
});

// password input 顯示參數
const passwordIsShow = ref<boolean>(false);
function togglePasswordIsShow() {
  passwordIsShow.value = !passwordIsShow.value;
}

// 按官網說明，需將 props toRefs，讓 vee-validate 知道參數的變化
const { name } = toRefs(props);
const { errorMessage, value } = useField(name);
</script>

<script lang="ts">
export default {
  name: "VueInput",
};
</script>

<template>
  <div class="flex flex-col items-start justify-start">
    <div class="center relative w-full">
      <slot name="header"></slot>
      <input
        v-model="value"
        :name="name"
        :type="passwordIsShow ? 'text' : type"
        :placeholder="placeholder"
        class="w-full rounded-md border py-1 px-3 transition-all dark:text-secondary"
        :class="[
          inputClass,
          errorMessage
            ? 'border-err focus-visible:outline-err'
            : 'focus-visible:secondary border-secondary',
        ]"
      />
      <!-- password 點擊控制是否顯示密碼 -->
      <div
        v-if="type === 'password'"
        class="absolute top-1/2 right-2 h-full -translate-y-1/2 py-1.5"
        @click="togglePasswordIsShow"
      >
        <font-awesome-icon
          :icon="`fa-solid fa-eye${passwordIsShow ? '-slash' : ''}`"
          class="h-full"
        />
      </div>
      <slot name="back"></slot>
    </div>

    <!-- 錯誤提示 -->
    <div v-if="errorMessage" class="flex justify-end text-sm text-err">
      {{ errorMessage }}
    </div>
  </div>
</template>
