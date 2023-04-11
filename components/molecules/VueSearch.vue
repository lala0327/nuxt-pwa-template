<script setup lang="ts">
import { VueInput, VueForm } from "../atoms";

const emit = defineEmits<{
  (e: "setSearchText", values: string): void;
}>();

// formValues 變動時搜尋
const search = (formValues: Record<string, any>) => {
  emit("setSearchText", formValues.search);
};
</script>

<script lang="ts">
export default {
  name: "VueSearch",
};
</script>

<template>
  <VueForm class="w-full" @formChange="search">
    <VueInput
      name="search"
      placeholder="Search..."
      inputClass="!border-2 !pl-7"
    >
      <template v-slot:header>
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="absolute top-1/2 left-2 -translate-y-1/2"
        />
      </template>
    </VueInput>
  </VueForm>
</template>
