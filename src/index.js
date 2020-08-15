
import loginView from './views/login'

import * as authUser from './auth/user';

export function init () {


}

export function login (config) {
  loginView(config)
}


export async function getUserInfo () {
  console.log(authUser)
  return authUser.get();
}

export function create () {
  // TODO 创建订单
  console.log('创建订单')
}