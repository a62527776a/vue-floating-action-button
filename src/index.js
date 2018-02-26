import FAB from './fab.vue'
import FABCantainer from './fab-cantainer.vue'

const install = (Vue) => {
  Vue.component(FAB.name, FAB)
  Vue.component(FABCantainer.name, FABCantainer)
  Vue.directive('click-outside', {
    bind: (el, binding, vnode) => {
      const listenClick = (e) => {
        window.alert(el.contains(e.target))
        if (el.contains(e.target) || e.target.dataset.outside) {
          return false 
        }
        binding.value()
      }
      el.__clickOutside__ = listenClick
      let body = document.body || document.documentElement
      body.addEventListener('click', listenClick)
    },
    unbind: (el, binding) => {
      let body = document.body || document.documentElement
      body.removeEventListener('click', el.__clickOutside__)
    }
  })
}

export default {
  install
}
