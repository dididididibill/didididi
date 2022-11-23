/* eslint-disable eqeqeq */
/**
 * 项目应用公共方法(集合)
 */

/**
 * 存储localStorage(存储的键值不允许重复)(涉及复杂类型数据时,数组对象中,有两个相同的对象...)
 */
export const setStore = (key, value) => {
  if (!key) return
  if (window.localStorage.length) {
    for (const storeKey in window.localStorage) {
      if (storeKey != key) {
        if (typeof value != 'string') {
          value = JSON.stringify(value)
        }
        window.localStorage.setItem(key, value)
      } else {
        console.log('localStorage存储的key不允许重复!', storeKey)
      }
    }
  } else {
    // 当localStorage没数据时,直接添加即可!
    if (typeof value != 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }
}

/**
 * 存储sessionStorage(存储的键值不允许重复)(涉及复杂类型数据时, 数组对象中, 有两个相同的对象...)
 */
export const setSessStore = (key, value) => {
  if (!key) return
  if (window.sessionStorage.length) {
    for (const storeKey in window.sessionStorage) {
      // eslint-disable-next-line eqeqeq
      if (storeKey != key) {
        if (typeof value !== 'string') {
          value = JSON.stringify(value)
        }
        window.sessionStorage.setItem(key, value)
      } else {
        console.log('sessionStorage存储的key不允许重复!')
      }
    }
  } else {
    // 当sessionStorage没数据时,直接添加即可!
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.sessionStorage.setItem(key, value)
  }
}

/**
 *
 * sessionStorage
 */
export const getSessStore = key => {
  if (!key) return
  const infostr = window.sessionStorage.getItem(key)

  if (infostr) {
    return JSON.parse(infostr)
  }
}

/**
 * 删除sessionStorage
 */
export const removeSessStore = key => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

/**
 * 获取localStorage
 */
export const getStore = key => {
  if (!key) return
  const infostr = window.localStorage.getItem(key)
  if (infostr) {
    return JSON.parse(infostr)
  }
}

/**
 * 删除localStorage
 */
export const removeStore = key => {
  if (!key) return
  window.localStorage.removeItem(key)
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

/**
 * 生成32位uuid
 */
export const getuuid = () => {
  return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4())
}
