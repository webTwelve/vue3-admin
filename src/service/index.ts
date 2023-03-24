import request from './request'
import { baseURL } from './request/config'
import localCache from '@/utils/cache'
const xyRequest = new request({
  baseURL,
  timeout: 10000,
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache('token') ?? ''
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      // console.log('实例内部请求成功拦截器')
      return config
    },
    requestInterceptorCatch(error) {
      // console.log('实例内部请求失败拦截器')
      return error
    },
    responseInterceptor(config) {
      // console.log('实例内部响应成功拦截器')
      return config
    },
    responseInterceptorCatch(error) {
      // console.log('实例内部响应失败拦截器')
      return error
    }
  }
})
export default xyRequest
