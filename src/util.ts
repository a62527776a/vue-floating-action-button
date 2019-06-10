export let handleClass = (type = 'MaterialDesign', iconClass = '') => {
  return type === 'MaterialDesign' ? 'material-icons' : 'iconfont icon-' + iconClass
}
