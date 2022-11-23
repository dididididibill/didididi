import axios from 'axios'
import { resInterceptors, reqInterceptors, resErrInterceptors} from './http-interceptors';


const service = axios.create({ 
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
service.defaults.retry = 3
service.defaults.retryDelay = 500
service.defaults.shouldRetry = _ => true

/**
 * 拦截器
 */
service.interceptors.request.use(
  config => {
    return reqInterceptors(config) 
}, error => {
    return Promise.reject(error)
})

service.interceptors.response.use(
  res => { 
    return resInterceptors(res) 
},error => {
    return Promise.reject(resErrInterceptors(error))
  }
)



/**
 * 封装get方法
 */
export function fetchGet(baseUrl, url, params = {}) {
  return new Promise((resolve, reject) => {
    service.defaults.baseURL = baseUrl
    service.get(url, { params: params }).then(response => {
      resolve(response)
    })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装fetchPost(以JSON形式提交)
 */
export function fetchPost(baseUrl, url, params = {}) {
  return new Promise((resolve, reject) => {
    service.defaults.baseURL = baseUrl
    service.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求(以formData提交)
 */
export function fetchFD(baseUrl, url, params = {}) {
  // 转换成FormData形式,传递参数给后台
  if (Object.prototype.toString.call(params) === '[object Object]') {
    const formData = new FormData() 
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key])
      }
    }
    return new Promise((resolve, reject) => { 
      service.defaults.baseURL = baseUrl
      service.post(url, formData)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  } else {
    console.log('传递的参数为对象形式!')
  }
}

/**
 * 封装fetchJson(请求本地静态JSON文件)
 */
export function fetchJson(baseUrl, url, params = {}, config) {
  return new Promise((resolve, reject) => {
    service.defaults.baseURL = baseUrl
    service.get(url, {
      params: params,
      baseURL: '' // 请求本地JSON文件,不需要proxy代理
    }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
