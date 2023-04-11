<script setup lang="ts">
import { useForm } from "vee-validate";
import { watch, computed } from "vue";

// props參數
interface VueFormProps {
  schema?: object
  initialValues?: object
}
// 預設參數
const props = defineProps<VueFormProps>();

const emit = defineEmits<{
  (e: "submit", formValues: Record<string, any>): void;
  (e: "formChange", formValues: Record<string, any>): void;
}>();

// 把 props 內容用 computed 丟出來，useForm 才可以正常按照變動時重新綁定
const initialValues = computed(() => props.initialValues)
const validationSchema = computed(() => props.schema)

const { handleSubmit, values, meta, errors } = useForm({ initialValues, validationSchema });

// 送出動作
const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});

// 監聽 form 是否變動
watch(
  values,
  (newValue) => {
    emit("formChange", newValue);
  },
  { deep: true, immediate: true }
);

// 將部分會用到值對外宣告，讓 parent 可透過 $refs 取用
defineExpose({
  values,
  errors,
  meta,
});
</script>

<script lang="ts">
export default {
  name: "VueForm",
};
</script>

<template>
  <form @submit="onSubmit" class="w-full">
    <slot v-bind="{ values, errors }"></slot>
  </form>
</template>
