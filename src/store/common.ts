import { defineStore } from 'pinia'
// import {
//   accountLoginRequest,
//   userInfoRequest,
//   userRoleRequest
// } from '@/service/login/index'
// import { mapMenusToRoutes } from '@/utils/map-menus'
import { allMainRoutes } from '@/router/routes'
import type { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'
const useCommonStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      id: 0,
      userInfo: {},
      userRole: [
        {
          id: 1,
          name: '一级菜单',
          type: 1,
          children: [
            {
              id: 10,
              name: '一级子菜单一',
              type: 2
            },
            {
              id: 11,
              name: '一级子菜单二',
              type: 2
            }
          ]
        },
        {
          id: 2,
          name: '二级菜单',
          type: 1,
          children: [
            {
              id: 20,
              name: '二级子菜单一',
              type: 2
            },
            {
              id: 21,
              name: '二级子菜单二',
              type: 2
            }
          ]
        }
      ]
    }
  },
  //开启持久化
  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ['token', 'userInfo', 'userRole'] }
    ]
  },
  actions: {
    async accountLoginAction(account: IAccount) {
      // 获取TOKEN
      // const res = await accountLoginRequest(account)
      // this.token = res.data.token
      // this.id = res.data.id
      console.log(account, '---')
      localCache.setCache('token', 'AAA')
      // // 获取用户信息
      // const userInfoRes = await userInfoRequest(res.data.id)
      // this.userInfo = userInfoRes.data
      // localCache.setCache('userInfo', userInfoRes.data)
      // // 获取用户菜单
      // const userRoleRes = await userRoleRequest(res.data.id)
      // this.userRole = userRoleRes.data
      // localCache.setCache('userRole', userRoleRes.data)
      this.SAVE_MENUS()
      // const routes = mapMenusToRoutes(allMainRoutes)
      // routes.forEach((item) => router.addRoute('main', item))
    },
    async loadLocalLogin() {
      // 获取用户菜单
      // const userRoleRes = await userRoleRequest(this.userInfo.id)
      // this.userRole = userRoleRes.data
      // router.push('/main')
      // const routes = mapMenusToRoutes(allMainRoutes)
      // routes.forEach((item) => router.addRoute('main', item))
    },
    SAVE_MENUS() {
      router.push('/main')
      allMainRoutes.forEach((item) => router.addRoute('main', item))
    }
  }
})
export function setupStore() {
  useCommonStore().loadLocalLogin()
}
export default useCommonStore
