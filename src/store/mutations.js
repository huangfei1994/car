import {
  SET_AUTHORIZATION,
  SET_PERMISSION,
  SET_USERINFO
} from './mutation-types'
import { setStore } from 'Utils/sessionstore'
// 必须是同步代码
const mutation = {
  [SET_AUTHORIZATION] (state, authorization) {
    state.authorization = authorization
    setStore('authorization', authorization)
  },
  [SET_PERMISSION] (state, permission) {
    state.permission = permission
    setStore('permission', permission)
  },
  [SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
    setStore('userinfo', userinfo)
  }
}
export default mutation
