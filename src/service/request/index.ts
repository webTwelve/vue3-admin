import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import type { IXyRequestConfig } from './type'
const DEAFULT_LOADING = true
class xyRequest {
  instance: AxiosInstance
  isShowLoading: boolean
  loading?: any
  constructor(config: IXyRequestConfig) {
    this.instance = axios.create(config)
    this.isShowLoading = config.isShowLoading ?? DEAFULT_LOADING
    // 实例拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
    // 全局拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            fullscreen: true
          })
        }

        // console.log('全局请求成功拦截')
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 500)
        // console.log('全局响应成功拦截')
        // if (!res.data.success) {
        //   console.log('错误信息')
        // }
        return res.data
      },
      (error) => {
        this.loading?.close()
        if (error.status == '404') {
          // console.log('错误信息')
        }
        return error
      }
    )
  }
  request<T>(config: IXyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.isShowLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.isShowLoading = DEAFULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: IXyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: IXyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}
export default xyRequest
