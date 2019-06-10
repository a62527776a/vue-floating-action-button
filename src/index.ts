import FAB from './fab.vue'
import FABItem from './fab-item.vue'
import FABCantainer from './fab-cantainer.vue'
import { clickOutside } from './util/click-outside'

interface Opt {
  iconType: string
}

function install (Vue: any, options: Opt) {
  if (options && options.iconType) {
    FAB.props.iconType.default = options.iconType
  }
  Vue.component('vue-fab', FAB)
  Vue.component(FABItem.name, FABItem)
  Vue.component(FABCantainer.name, FABCantainer)
  Vue.directive('click-outside', clickOutside)
}

module.exports = install
