<script setup lang="ts">
import { computed } from "vue";
import { useDefaultStore } from "@/store/default";

const defaultStore = useDefaultStore();
const { data: boardData } = await useFetch("/api/board");
interface talkType {
  _id: string;
  name: string;
  text: string;
}
const talkArr: talkType[] = computed(() => {
  return boardData.value?.statusMessage;
});
</script>

<script lang="ts">
export default {
  name: "Board",
};
</script>

<template>
  <NuxtLayout name="vue-bar">
    <template #UpBar>
      <div></div>
      <div class="text-xl font-bold">公告欄</div>
      <div></div>
    </template>
    <!-- Content -->
    <div class="w-full h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden">
      <div class="w-full h-auto py-5 px-3">
        <div v-for="talk in talkArr" :key="talk._id">
          <div v-if="talk.name === defaultStore.name" class="py-2">
            <div class="flex justify-end items-center">
              <p class="mx-3">{{ talk.name }}</p>
              <div class="w-10 h-10 rounded-full bg-primary"></div>
            </div>
            <div class="flex justify-end">
              <div
                class="w-auto h-auto max-w-max bg-primary text-secondary px-3 py-1 rounded-2xl mx-12"
              >
                {{ talk.text }}
              </div>
            </div>
          </div>
          <div v-else class="py-2">
            <div class="flex justify-start items-center">
              <div class="w-10 h-10 rounded-full bg-primary"></div>
              <p class="mx-3">{{ talk.name }}</p>
            </div>
            <div class="flex justify-start">
              <div
                class="w-auto h-auto max-w-max bg-primary text-secondary px-3 py-1 rounded-2xl mx-12"
              >
                {{ talk.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-10 bg-primary"></div>
  </NuxtLayout>
</template>
