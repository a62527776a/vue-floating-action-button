import FAB from './fab.vue'
import FABCantainer from './fab-cantainer.vue'

const install = (Vue) => {
  Vue.component(FAB.name, FAB)
  Vue.component(FABCantainer.name, FABCantainer)
  Vue.directive('click-outside', {
    bind: (el, binding, vnode) => {
      const listenClick = (e) => {
        window.alert(el.contains)
        if (el.contains(e.target) || e.target.dataset.outside) {
          return false 
        }
        binding.value()
        window.alert('执行outside后')
      }
      el.__clickOutside__ = listenClick
      document.addEventListener('click', listenClick)
    },
    unbind: (el, binding) => {
      document.removeEventListener('click', el.__clickOutside__)
    }
  })
}

export default {
  install
}
