<script setup lang="ts">
// props參數
interface DataProps {
    _id:string,
    name:string,
    type:'default'|'food'|'hotel'|'plane'|'shopping',
    detail:string
}

interface PlanBoxProps {
    data:DataProps
}
// 預設參數
withDefaults(defineProps<PlanBoxProps>(),{})
</script>

<script lang="ts">
export default {
  name: "PlanBox",
};
</script>

<template>
  <!-- 登入頁 -->
  <div class="w-full h-32 border-2 border-[var(--border-color)] rounded-md p-3 overflow-hidden relative">
    <div class="">
        <p class="font-bold text-2xl">{{data.name}}</p>
        <p class="mt-1 whitespace-normal">{{data.detail}}</p>
    </div>
    <div class="absolute -bottom-3 right-2" >
        <font-awesome-icon
            class="text-9xl  text-tertiary opacity-30"
            :icon="
                    data.type === 'plane'? 'fa-solid fa-plane'
                    :data.type === 'hotel'? 'fa-solid fa-hotel'
                    :data.type === 'food'? 'fa-solid fa-utensils'
                    :data.type === 'shopping'? 'fa-solid fa-basket-shopping'
                    :'fa-mountain-sun'
                " 
        />
    </div>
  </div>
</template>
