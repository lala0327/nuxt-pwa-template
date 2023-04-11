import { defineStore } from 'pinia'
import type { ToastProps } from "@/components/molecules/VueToast.vue";

interface ToastInStore extends ToastProps {
  duration?: number
}

// state Type
interface ToastState{
  toast: Array<ToastInStore>,
}

export const useMainStore = defineStore('toast', {
  // a function that returns a fresh state
  state: ():ToastState => ({
    toast: [],
  }),
  actions: {
       fireToast(payload:ToastInStore) {
      // 呼叫新增 Toast 時，建立隨機碼為 ID，用於關閉該 Toast
      const id = String(payload.id || Math.random())
      const newToast = [
        ...this.toast,
        {
          id,
          dismiss: () => this.dismissToast(id),
          ...payload,
        },
      ];
      this.toast = newToast
      // 如果 Toast 有 action，不做自動關閉
      if (!payload.action) {
        setTimeout(
          () => this.dismissToast(id)
          , payload.duration || 1750);
      }
    },
    // 刪除 Toast
    dismissToast(id: ToastProps['id']) {
      if (id) this.toast = this.toast.filter(r => id !== r.id);
      else this.toast = [];
    },
  },
    persist: {
    paths: [],
  },
})