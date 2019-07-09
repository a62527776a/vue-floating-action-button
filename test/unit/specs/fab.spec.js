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
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
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

  it('openMenu 函数在有子item的情况', () => {
    expect(wrapper.vm.$children.length).toBe(4)
    expect(wrapper.vm.active).toBe(false)
    wrapper.vm.openMenu()
    expect(wrapper.vm.active).toBe(true)
  })

  it('checkDirection 判断方向', () => {
    wrapper.vm.scrollTop = 40
    expect(wrapper.vm.checkDirection(80)).toBe('up')
    expect(wrapper.vm.checkDirection(20)).toBe('down')
  })

  it('recordScrollTopByChangeDirection', () => {
    let tobeScrollTop = 80
    wrapper.vm.scrollTop = 40
    wrapper.vm.scrollDirection = 'down'
    let _direction = wrapper.vm.checkDirection(tobeScrollTop)
    expect(wrapper.vm.checkDirection(tobeScrollTop)).toBe(_direction)
    wrapper.vm.recordScrollTopByChangeDirection(tobeScrollTop)
    expect(wrapper.vm.scrollTop).toBe(tobeScrollTop)
    expect(wrapper.vm.changeDirectionScrollTop).toBe(tobeScrollTop)
    expect(wrapper.vm.scrollDirection).toBe(_direction)
  })

  it('listenTouchStart', () => {
    let mockEvent = {
      touches: [
        {
          clientY: 8
        }
      ]
    }
    wrapper.vm.listenTouchStart(mockEvent)
    expect(wrapper.vm.touchEventInfo.startY).toBe(8)
  })

  it('listenTouchMove', () => {
    let mockTouchStartY = 4
    let mockTouchMoveY = 8
    let mockTouchstartEvent = {
      touches: [
        {
          clientY: mockTouchStartY
        }
      ]
    }
    let mockTouchMoveEvent = {
      touches: [
        {
          clientY: mockTouchMoveY
        }
      ]
    }
    wrapper.vm.listenTouchStart(mockTouchstartEvent)
    wrapper.vm.listenTouchMove(mockTouchMoveEvent)
    expect(wrapper.vm.touchEventInfo.startY).toBe(mockTouchStartY)
    expect(wrapper.vm.touchEventInfo.offsetY).toBe(mockTouchMoveY - mockTouchStartY)
    mockTouchStartY = 4
    mockTouchMoveY = 88
    mockTouchstartEvent.touches[0].clientY = mockTouchStartY
    mockTouchMoveEvent.touches[0].clientY = mockTouchMoveY
    wrapper.vm.listenTouchStart(mockTouchstartEvent)
    wrapper.vm.listenTouchMove(mockTouchMoveEvent)
    expect(wrapper.vm.hidden).toBe(false)
    expect(wrapper.vm.touchEventInfo.offsetY).toBe(0)
  })

  it('overflowThreshold', () => {
    expect(wrapper.vm.autoHideThreshold).toBe(50)
    wrapper.vm.touchEventInfo.offsetY = -60
    expect(wrapper.vm.overflowThreshold).toBe(true)
    wrapper.vm.touchEventInfo.offsetY = -40
    expect(wrapper.vm.overflowThreshold).toBe(false)
    wrapper.vm.touchEventInfo.offsetY = 40
    expect(wrapper.vm.overflowThreshold).toBe(false)
    wrapper.vm.touchEventInfo.offsetY = 60
    expect(wrapper.vm.overflowThreshold).toBe(true)
  })

  it('watch hidden', () => {
    wrapper.vm.hidden = true
    wrapper.vm.active = true
    wrapper.vm.hidden = false
    expect(wrapper.vm.active).toBe(true)
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

  it('clickoutside', () => {
    wrapper.vm.active = true
    wrapper.vm.clickoutside()
    expect(wrapper.vm.active).toBe(false)
  })

  it('scrollDirectionUpAndHidden', () => {
    wrapper.vm.scrollDirection = 'up'
    wrapper.vm.hidden = true
    expect(wrapper.vm.scrollDirectionUpAndHidden).toBe(true)
  })
  
  it('scrollDirectionDownAndShow', () => {
    wrapper.vm.scrollDirection = 'down'
    wrapper.vm.hidden = false
    expect(wrapper.vm.scrollDirectionDownAndShow).toBe(true)
  })

  it('scrollDirectionUpAndShow', () => {
    wrapper.vm.scrollDirection = 'up'
    wrapper.vm.hidden = false
    expect(wrapper.vm.scrollDirectionUpAndShow).toBe(true)
  })

  it('notChangeHideStatus', () => {
    let vm = wrapper.vm
    vm.autoHideDirection = 'up'
    wrapper.vm.scrollDirection = 'up'
    wrapper.vm.hidden = true
    expect(vm.notChangeHideStatus).toBe(true)
    wrapper.vm.scrollDirection = 'down'
    wrapper.vm.hidden = false
    expect(vm.notChangeHideStatus).toBe(true)
    vm.autoHideDirection = 'down'
    wrapper.vm.scrollDirection = 'up'
    wrapper.vm.hidden = false
    expect(vm.notChangeHideStatus).toBe(true)
    wrapper.vm.scrollDirection = 'down'
    wrapper.vm.hidden = true
    expect(vm.notChangeHideStatus).toBe(true)
  })
  
  it('scrollDirectionDownAndHidden', () => {
    wrapper.vm.scrollDirection = 'down'
    wrapper.vm.hidden = true
    expect(wrapper.vm.scrollDirectionDownAndHidden).toBe(true)
  })

  // it('测试滚动自动隐藏事件', () => {

  // })

  it('computedOffsetOver', () => {
    wrapper.vm.autoHideThreshold = 60
    expect(wrapper.vm.computedOffsetOver(80)).toBe(false)
    expect(wrapper.vm.computedOffsetOver(40)).toBe(true)
  })

  it('computedShowHideByOffset', () => {
    wrapper.vm.scrollDirection = 60
    wrapper.vm.autoHideDirection = 60
    expect(wrapper.vm.computedShowHideByOffset()).toBe(true)
    wrapper.vm.autoHideDirection = 50
    expect(wrapper.vm.computedShowHideByOffset()).toBe(false)
  })

  it('computedTransitionName', () => {
    wrapper.setProps({activeIcon: 'add'})
    wrapper.setProps({icon: 'add'})
    expect(wrapper.vm.computedTransitionName).toEqual('fab-icon')
    wrapper.setProps({icon: 'remove'})
    wrapper.vm.active = true
    expect(wrapper.vm.computedTransitionName).toEqual('fab-active-icon')
    wrapper.vm.active = false
    expect(wrapper.vm.computedTransitionName).toEqual('fab-icon')
  })

  it('iconType 切换 展示 界面样式', () => {
    wrapper.setProps({iconType: 'MaterialDesign'})
    expect(wrapper.contains('.material-icons')).toEqual(true)
    wrapper.setProps({iconType: 'iconfont'})
    expect(wrapper.contains('.vue-fab-iconfont-icons')).toEqual(true)
  })

  it('hidden 样式展示', () => {
    wrapper.setData({ hidden : true })
    expect(wrapper.contains('.fab')).toEqual(true)
    wrapper.setData({ hidden : false })
    expect(wrapper.contains('.fab')).toEqual(false)
  })

  it('size 样式展示', () => {
    let sizeopt = ['normal', 'big', 'small']
    sizeopt.map(item => {
      wrapper.setProps({size : item})
      expect(wrapper.contains('.fab-size-' + item)).toEqual(true)
    })
  })

  it('active 影响样式', () => {
    wrapper.setData({ active : true })
    expect(wrapper.contains('.fab-active')).toEqual(true)
    wrapper.setData({ active : false })
    expect(wrapper.contains('.fab-active')).toEqual(false)
  })

  // it('测试子菜单点击后自动关闭', (done) => {
    // wrapper.find('.fab').trigger('click')
    // wrapper.find('.fab-item').trigger('click')
    // setTimeout( _ => {
    //   expect(wrapper.vm.active).toBe(false)
    //   done()
    // }, 600)
    // // 测试props clickAutoClose 属性是否生效
    // // false 预期为点击后不关闭子菜单
    // wrapper.setProps({
    //   clickAutoClose: false
    // })
    // expect(wrapper.vm.clickAutoClose).toBe(false)
    // // 打开子菜单
    // wrapper.find('.fab').trigger('click')
    // // 点击子菜单
    // wrapper.find('.fab-item').trigger('click')
    // // 预期不自动关闭子菜单
    // setTimeout( _ => {
    //   expect(wrapper.vm.active).toBe(true)
    //   done()
    // }, 600)
  // })
  
  // it('测试子菜单props idx属性对top、transitionDelay属性的影响', (done) => {
    // 给每个子菜单复制idx属性
    // for (let i = 1; i < 4; i++) {
    //   wrapper.vm.$children[i].idx = i - 1
    // }
    // // 打开子菜单
    // wrapper.find('.fab').trigger('click')
    // let wrappers = wrapper.findAll('.fab-item')
    // setTimeout(_ => {
    //   for (let i = 0; i < wrappers.length; i++) {
    //     // -40 - this.idx * this.$parent.globalOptions.spacing + 'px'
    //     let topReg = new RegExp(`${-40 - i * wrapper.vm.globalOptions.spacing}px`)
    //     // this.idx * this.$parent.globalOptions.delay + 's'
    //     let delayReg = new RegExp(`${i * wrapper.vm.globalOptions.delay}s`)
    //     expect(wrappers.wrappers[i].attributes().style).toMatch(topReg)
    //     expect(wrappers.wrappers[i].attributes().style).toMatch(delayReg)
    //   }
    //   done()
    // }, 600)
  // })

})