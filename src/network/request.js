import axios from 'axios'
import router from '../router/index'

export function request(config){
  const instance = axios.create({
    baseURL: '/api',
    //timeout: 10000,
    responseType: 'json'
  })
  //axios 请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  });
  //axios 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
    router.push({
      path: "/error",
    });
  });
  
  return instance(config)
}
