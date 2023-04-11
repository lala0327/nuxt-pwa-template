// import { defineStore } from 'pinia';
// import type { ToastProps } from "@/components/molecules/VueToast.vue";

// interface ToastInStore extends ToastProps {
//   duration?: number
// }

// // state Type
// interface ToastState{
//   toast: Array<ToastInStore>,
// }

// export const useToastStore = defineStore('toast', {
//   state: (): ToastState => ({
//     toast: [],
//   }),
//   // 似 Methods
//   actions: {
//     // 新增 Toast
//     fireToast(payload:ToastInStore) {
//       // 呼叫新增 Toast 時，建立隨機碼為 ID，用於關閉該 Toast
//       const id = String(payload.id || Math.random())
//       const newToast = [
//         ...this.toast,
//         {
//           id,
//           dismiss: () => this.dismissToast(id),
//           ...payload,
//         },
//       ];
//       this.toast = newToast
//       // 如果 Toast 有 action，不做自動關閉
//       if (!payload.action) {
//         setTimeout(
//           () => this.dismissToast(id)
//           , payload.duration || 1750);
//       }
//     },
//     // 刪除 Toast
//     dismissToast(id: ToastProps['id']) {
//       if (id) this.toast = this.toast.filter(r => id !== r.id);
//       else this.toast = [];
//     },
//   },
//   // 設定要存 localStorage 的資料
//   persist: {
//     paths: [],
//   },
// })

import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useToastStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
  },
})