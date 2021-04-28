import fetch from './axios'
import qs from 'qs'
/**
 * post 请求 参数放在data
 * get  请求 参数放在params是拼接在url后面的 需要使用qs序列化
 *
 */
export function login(data) {
  return fetch({
    url: '/api/login',
    method: 'post',
    data: data
  })
}

export function getUserInfo(data) {
  return fetch({
    url: '/api/user/info',
    method: 'get',
    params: qs.stringify(data, { arrayFormat: 'brackets' })
  })
}
