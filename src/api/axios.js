import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: '/',
  timeout: 120000
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = "Bearer ";
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response) {
      // 请求已发出,有响应内容回来,但是http状态码不在2xx范围内
    } else {
      // 服务端错误,本地网络
    }
    return Promise.reject(error)
  }
)

export default service
