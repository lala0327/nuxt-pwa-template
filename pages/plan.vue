<script setup lang="ts">
import { computed } from "vue";
const { data: planData } = await useFetch("/api/plan");
const { data: placeData } = await useFetch("/api/place");
interface planArrType {
  _id: string;
  planArr: string[];
  day: number;
  date: string;
}

interface placeArrType {
  _id: string;
  name: string;
  type: string;
  detail: string;
}

const dateIndex = ref(0);
const changeDate = (bool: boolean) => {
  if (bool) {
    if (dateIndex.value < dateArr.value.length - 1) dateIndex.value += 1;
  } else if (dateIndex.value > 0) dateIndex.value -= 1;
};

// 取得日期陣列
const dateArr = computed(() => {
  const array = [];
  if (planData.value?.statusMessage)
    for (const plan of planData.value?.statusMessage as planArrType[]) {
      array.push(plan.date);
    }
  return array;
});
// 取得日期內的行程_id
const planArrID = computed(() => {
  let idArr: string[] = [];
  if (planData.value?.statusMessage) {
    for (const plan of planData.value?.statusMessage as planArrType[]) {
      if (plan.date === dateArr.value[dateIndex.value]) {
        idArr = plan.planArr;
      }
    }
  }
  return idArr;
});
// 從 placeData 取得詳細行程資料
const planArr = computed(() => {
  const array = [];
  if (placeData.value?.statusMessage) {
    for (const plan of planArrID.value) {
      for (const place of placeData.value?.statusMessage as placeArrType[]) {
        if (plan === place._id) {
          array.push(place);
        }
      }
    }
  }
  return array;
});
// import { VueButton } from "@/components/atoms";
// import { useDefaultStore } from "@/store/default";
// import { VueBar, PlanBox } from "@/components/template";
// const defaultStore = useDefaultStore();
// const router = useRouter();

// const test = () => {
//   router.push("/");
// };

// const clear = () => {
//   defaultStore.setName("");
// };
// definePageMeta({
//   layout: "vue-bar",
// });
// const { data } = await useFetch("/api/place");
</script>

<script lang="ts">
export default {
  name: "MainIndex",
};
</script>

<template>
  <!-- <VueBar>
    <div class="w-full h-full overflow-y-auto overflow-x-hidden p-3">
      {{defaultStore.name}}
    <VueButton @click="test">測試router</VueButton>
    <VueButton @click="clear">測試clear</VueButton>
      <div v-for="plan in data.statusMessage" :key="plan">
        <PlanBox class="my-3" :data="plan"></PlanBox>
      </div>

    </div>
    <div class="p-3 border m-3">
      <NuxtLink to="main">測試 NuxtLink</NuxtLink>
    </div>
  </VueBar> -->
  <NuxtLayout name="vue-bar">
    <template #UpBar>
      <div></div>
      <div class="center">
        <font-awesome-icon
          icon="fa-solid fa-caret-left"
          class="text-3xl"
          :class="
            dateIndex <= 0
              ? 'cursor-default pointer-events-none opacity-50'
              : 'cursor-pointer'
          "
          @click="() => changeDate(false)"
        />
        <p class="text-lg font-bold mx-3 tracking-widest">
          {{ dateArr[dateIndex] }}
        </p>
        <font-awesome-icon
          icon="fa-solid fa-caret-right"
          class="text-3xl"
          :class="
            dateIndex >= dateArr.length - 1
              ? 'cursor-default pointer-events-none opacity-50'
              : 'cursor-pointer'
          "
          @click="() => changeDate(true)"
        />
      </div>
      <div></div>
    </template>
    <!-- Content -->
    <div class="w-full h-full overflow-y-auto overflow-x-hidden">
      <div class="w-full h-auto relative center flex-col py-5">
        <div
          v-for="plan in planArr"
          :key="plan._id"
          class="center flex-col w-11/12 h-auto"
        >
          <div class="w-full flex justify-start items-center my-2">
            <div class="w-2 h-2 rounded-full bg-tertiary mx-3"></div>
            <div class="w-[calc(100%-32px)] opacity-50 text-sm">
              {{
                plan.type === "plane"
                  ? "搭機行程"
                  : plan.type === "hotel"
                  ? "住宿行程"
                  : plan.type === "food"
                  ? "飲食行程"
                  : plan.type === "shopping"
                  ? "購物行程"
                  : "一般行程"
              }}
            </div>
          </div>
          <div class="w-full h-full flex justify-start items-center">
            <div class="w-0.5 h-32 bg-tertiary mx-[15px]"></div>
            <div
              class="h-32 w-[calc(100%-32px)] flex justify-center items-start flex-col"
            >
              <div class="w-full text-2xl font-bold">
                {{ plan.name }}
                <font-awesome-icon
                  class="text-2xl text-tertiary opacity-80 mx-1"
                  :icon="
                    plan.type === 'plane'
                      ? 'fa-solid fa-plane'
                      : plan.type === 'hotel'
                      ? 'fa-solid fa-hotel'
                      : plan.type === 'food'
                      ? 'fa-solid fa-utensils'
                      : plan.type === 'shopping'
                      ? 'fa-solid fa-basket-shopping'
                      : 'fa-mountain-sun'
                  "
                />
              </div>
              <div class="w-full h-[calc(100%-32px)]">
                {{ plan.detail }}
              </div>
              <!-- {{ plan }} -->
              <div class="w-full h-0.5 bg-tertiary"></div>
            </div>
          </div>
          <!-- <div class="h-40 center flex-col mr-2">
          <div class="w-2 h-2 rounded-full bg-tertiary my-3"></div>
          <div class="w-0.5 h-full bg-tertiary"></div>
        </div>
        <div class="h-full w-full">
          <p class="text-2xl font-bold">{{ plan.name }}</p>
          <p>{{ plan.detail }}</p>
          {{ plan }}
          <div class="w-full h-0.5 bg-tertiary"></div>
        </div> -->
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
