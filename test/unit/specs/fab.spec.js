/**
 * 测试 fab.vue
 */

import Vue from 'vue'
import { mount, createLocalVue } from 'vue-test-utils'
import index from '../../../src/index.js'
import Fab from '../../../src/fab.vue'
import FabItem from '../../../src/fab-item.vue'

describe('fab.vue', () => {
  const localVue = createLocalVue()
  localVue.use(index)
  let wrapper = null

  beforeEach(() => {
    // 初始化wrapper
    wrapper = mount(Fab, {
      localVue,
      slots: {
        default: [FabItem, FabItem, FabItem]
      }
    })
  })

  afterEach(() => {
    // 废弃wrapper
    wrapper = null
  })

  it('测试default slot是否有效', () => {
    expect(wrapper.contains(FabItem)).toBe(true)
  })

  it('测试props', () => {
    // icon
    const expectIcon = 'https'
    expect(wrapper.props().icon).toBe('add')
    wrapper.setProps({
      icon: expectIcon
    })
    expect(wrapper.find('.material-icons').text()).toBe(expectIcon)
  })

  it('测试onOffFab函数', () => {
    wrapper.vm.onOffFab(false)
    expect(wrapper.vm.hidden).toBe(false)
    wrapper.vm.onOffFab(true)
    expect(wrapper.vm.hidden).toBe(true)
  })

  it('测试主按钮点击事件', () => {
    // 有子菜单的情况下
    wrapper.find('.fab').trigger('click')
    expect(wrapper.vm.active).toBe(true)
    wrapper.find('.fab').trigger('click')
    expect(wrapper.vm.active).toBe(false)
    const localWrapper = mount(Fab)
    // 无子菜单的情况下
    expect(localWrapper.vm.$children.length).toBe(1)
    localWrapper.find('.fab').trigger('click')
    // 不会打开菜单
    expect(localWrapper.vm.active).toBe(false)
  })

  // 打开子菜单后隐藏整个菜单 预期为自动关闭自菜单
  it('当且仅当hidden属性为false active属性为true时 active属性是否会变成false', (done) => {
    wrapper.find('.fab').trigger('click')
    // 当主菜单显示在屏幕上时 打开子菜单后
    expect(wrapper.vm.active).toBe(true)
    expect(wrapper.vm.hidden).toBe(true)
    // // 关闭主菜单
    wrapper.vm.onOffFab(false)
    // // 自动关闭子菜单
    expect(wrapper.vm.hidden).toBe(false)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.active).toBe(false)
      done()
    })
  })

  // 当子菜单打开之后 预期点击除子菜单以外的地方全部关闭
  it('测试click-outside事件', () => {
    // 先将子菜单打开
    wrapper.find('.fab').trigger('click')
    // 点击body关闭子菜单
    document.body.click()
    expect(wrapper.vm.active).toBe(false)
    wrapper.find('.fab').trigger('click')
    let buttonEl = document.createElement('button')
    document.body.appendChild(buttonEl)
    // 点击其他元素预期关闭子菜单
    buttonEl.click()
    expect(wrapper.vm.active).toBe(false)
    wrapper.find('.fab').trigger('click')
    // 再次点击主菜单按钮预期关闭子菜单
    wrapper.find('.fab').trigger('click')
    expect(wrapper.vm.active).toBe(false)
  })

  // it('测试滚动自动隐藏事件', () => {
  //   document.body.style.height = 3000 + 'px'
  //   for (let i = 0; i < 50; i++) {
  //     window.scrollBy(0, 5)
  //     // console.log(document.documentElement.scrollTop)
  //     // console.log(wrapper.vm.scrollDirection)
  //     console.log(wrapper.vm.scrollTop)
  //     console.log(document.documentElement.scrollTop)
  //   }
  //   for (let i = 0; i < 50; i++) {
  //     window.scrollBy(0, -5)
  //     // console.log(document.documentElement.scrollTop)
  //     // console.log(wrapper.vm.scrollDirection)
  //     console.log(wrapper.vm.scrollTop)
  //     console.log(document.documentElement.scrollTop)
  //   }
  //   expect(wrapper.vm.hidden).toBe(false)
  // })

  it('测试子菜单点击后自动关闭', (done) => {
    wrapper.find('.fab').trigger('click')
    wrapper.find('.fab-item .material-icons').trigger('click')
    wrapper.vm.$nextTick(() => {
      // 300毫秒后active为false
      // expect(wrapper.vm.active).toBe(false)
      done()
    })
  })

})