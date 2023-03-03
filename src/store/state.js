import { getStore } from 'Utils/sessionstore'
const state = {
  authorization: getStore('authorization') || '',
  permission: getStore('permission') || [],
  userinfo: getStore('userinfo') || ''
}
export default state
