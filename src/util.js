export let handleClass = (type = 'MaterialDesign', iconClass = '') => {
  return type === 'MaterialDesign' ? 'material-icons' : 'iconfont icon-' + iconClass
}

/**
 * @method testSafariBrower 处理safari浏览器body无法响应click事件
 * @return { Boolean } true / false
 */
export const testSafariBrower = (userAgent = null) => {
  let UA = null
  userAgent ? UA = userAgent : UA = window.navigator.userAgent
  if (/iPad/i.test(UA) || /iPhone/i.test(UA) || /Mac/i.test(UA)) {
    return true
  } else {
    return false
  }
}
