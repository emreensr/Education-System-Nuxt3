import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "restricted"
declare module "/Users/macbook/Desktop/Projects/Education-System-Nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}