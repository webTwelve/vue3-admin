import type { RouteRecordRaw } from 'vue-router'
import { allMainRoutes } from '@/router/routes'
export function mapMenusToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const _recursiveMenus = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allMainRoutes.find((item) => item.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recursiveMenus(menu.children)
      }
    }
  }
  _recursiveMenus(menus)
  return routes
}
