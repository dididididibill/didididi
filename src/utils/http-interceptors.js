import { getSessStore, removeStore, getStore } from './mUtils'
import { Toast } from 'vant';

let requeryToast = {}

// // 请求拦截
export function reqInterceptors(config) {
  requeryToast = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  });
  const AuthInfo = getSessStore('authInfo')
  if (AuthInfo && AuthInfo.token) {
    config.headers['token'] = AuthInfo.token
  } 
  return config
}

/*
* HTTP响应拦截
* */
export function resInterceptors(response) {
  requeryToast.clear()
  return response.data
}


/*
* HTTP响应拦截  error
* */
export function resErrInterceptors(error) {
  requeryToast.clear()
  Toast.fail('服务器错误,请稍后再试!')

  // console.log(JSON.stringify(error.response.status) , '请求error')
  // if(error.response.status == 401){
  //   Toast.fail('请求失败')
  //   setTimeout(() => {
  //     window.location.href='../../index.html#/home'
  //   }, 1000);
  // }
  return error;
}

