import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IXyInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface IXyRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IXyInterceptors<T>
  isShowLoading?: boolean
}
