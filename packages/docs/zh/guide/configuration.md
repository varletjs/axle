# 配置

`Axle` 完全支持 `axios` 的所有配置能力。

```js
const axle = createAxle(/** @see https://axios-http.com **/)
// axle 内置的 axios ，用法和 axios 一模一样，并且和 axle 共享配置。
const { axios } = axle

axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['TOKEN'] = TOKEN
axios.defaults.timeout = 2500

// 添加请求前拦截器
axios.interceptors.request.use(
  (config) => {
    // 请求前处理
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  },
)

// 添加请求后返回拦截器
axios.interceptors.response.use(
  (response) => {
    // 任何位于 2xx 范围内的状态码都会导致该函数触发
    // 对响应数据做一些事情
    return response
  },
  (error) => {
    // 任何超出 2xx 范围的状态代码都会导致此函数触发
    // 对响应错误做一些事情
    return Promise.reject(error)
  },
)
```
