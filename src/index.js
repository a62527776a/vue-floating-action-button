import FAB from './fab.vue'
import FABItem from './fab-item.vue'
import FABCantainer from './fab-cantainer.vue'

/**
 * @method testSafariBrower 处理safari浏览器body无法响应click事件
 * @return { Boolean } true / false
 */
let testSafariBrower = (userAgent = null) => {
  let UA = null
  userAgent ? UA = userAgent : UA = window.navigator.userAgent
  if (UA.match(/iPad/i) || UA.match(/iPhone/i) || UA.match(/Mac/i)) {
    return true
  } else {
    return false
  }
}

const install = (Vue, options) => {
  if (options) {
    FAB.props.globalOptions.default = () => options
  }
  Vue.component(FAB.name, FAB)
  Vue.component(FABItem.name, FABItem)
  Vue.component(FABCantainer.name, FABCantainer)
  Vue.directive('click-outside', {
    bind: (el, binding, vnode) => {
      const listenClick = (e) => {
        if (el.contains(e.target) || e.target.dataset.outside) {
          return false
        }
        binding.value()
      }
      el.__clickOutside__ = listenClick
      // 处理safari浏览器body对象无法响应click事件
      if (testSafariBrower()) {
        let html = document.querySelector('html')
        html.setAttribute('class', 'setCursor')
        html.addEventListener('click', listenClick)
      } else {
        window.addEventListener('click', listenClick)
      }
    },
    unbind: (el, binding) => {
      if (testSafariBrower()) {
        document.removeEventListener('click', el.__clickOutside__)
      } else {
        document.querySelector('html').removeEventListener('click', el.__clickOutside__)
      }
    }
  })
}

export default {
  install,
  testSafariBrower
}
