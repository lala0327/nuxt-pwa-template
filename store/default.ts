import { defineStore } from 'pinia'

// state Type
export interface defaultType{
  version: string, // 版本號
  isLoading: boolean // 是否在加載中
  isDark: 'light'|'dark'|'auto' // 是否是深色模式
  config: object
  name:string
}

export const useDefaultStore = defineStore('default', {
  state: (): defaultType => ({
    version:"0.0.0",
    isLoading: false,
    isDark: 'auto',
    config: {},
    name: "",
  }),
  // 似 Computed、不可傳參數
  getters: {
  },
  // 似 Methods
  actions: {
    setName(name:defaultType['name']) {
        this.name = name
    },
    changeIsDark(isDark:defaultType['isDark']) {
      this.isDark = isDark
    },
  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: [
      "version", "isDark", "name"
    ],
  },
})
