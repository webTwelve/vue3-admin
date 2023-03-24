import type { RouteRecordRaw } from 'vue-router'
import analysis from './main/analysis'
import product from './main/product'
import story from './main/story'
import system from './main/system'
export const allMainRoutes: RouteRecordRaw[] = [
  ...analysis,
  ...product,
  ...story,
  ...system
]
