import FAB from './fab.vue'
import FABCantainer from './fab-cantainer.vue'

const install = (Vue) => {
  Vue.component(FAB.name, FAB)
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
      window.alert(navigator.userAgent.indexOf("Safari"))
      if (navigator.userAgent.indexOf("Safari") > -1) {
        window.alert(String(document.body.style))
      }
      document.body.addEventListener('click', listenClick)
    },
    unbind: (el, binding) => {
      document.body.removeEventListener('click', el.__clickOutside__)
    }
  })
}

export default {
  install
}
