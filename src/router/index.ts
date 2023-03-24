import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache'
import useCommonStore from '@/store/common'
import pinia from '@/store'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/not-found/notfound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
let load = 0
const commonStore = useCommonStore(pinia)
router.beforeEach((to) => {
  const token = localCache.getCache('token')

  if (to.path != '/login') {
    if (!token) {
      return '/login'
    }
  }

  if (to.path == '/main' && !load) {
    if (token) {
      return '/main/analysis'
    }
  }
  // 获取菜单
  const menuTree = commonStore.userRole
  //非登录、有菜单数据、 没有进行添加（或者刷新了）
  if (load === 0 && menuTree.length && to.name !== 'login') {
    load++
    //再次调用存储菜单数据(前提是在存储的地方有调用添加路由规则)、或者直接调用动态添加路由规则事件
    commonStore.SAVE_MENUS()
    return to.fullPath
  }
})
export default router
