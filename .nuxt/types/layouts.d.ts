import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main"
declare module "C:/Users/capci/Desktop/Projects/Education-System-Nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}