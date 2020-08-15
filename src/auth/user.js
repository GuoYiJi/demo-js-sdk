

let current = {

}

export function get() {
  if (!current.nickname) {
    throw('没有登录')
  }

  return current
}

export function set(user) {

  current = {
    ...current,
    ...user
  }
}