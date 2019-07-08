import { mount, createLocalVue } from 'vue-test-utils'
import index from '../../../src/index.js'
import FabCantainer from '../../../src/fab-cantainer.vue'
import { Timeout } from '../../../src/util'

describe('fab-cantainer.vue', () => {
  const localVue = createLocalVue()
  localVue.use(index)
  let wrapper = null

  beforeEach(() => {
    // 初始化wrapper
    wrapper = mount(FabCantainer, {
      localVue
    })
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  })

  it('startAnimate', (done) => {
    let timeout = new Timeout()
    expect(wrapper.vm.touching).toBe(false)
    expect(wrapper.vm.animating).toBe(false)
    expect(wrapper.vm.mousedown).toBe(false)
    wrapper.vm.startAnimate()
    expect(wrapper.vm.touching).toBe(true)
    expect(wrapper.vm.animating).toBe(true)
    expect(wrapper.vm.mousedown).toBe(true)
    timeout.handleTimeout().then(() => {
      expect(wrapper.vm.animating).toBe(false)
      expect(wrapper.vm.mousedown).toBe(true)
      done()
    })
  })

  it('startAnimate 当mousedown为false时', (done) => {
    let timeout = new Timeout()
    expect(wrapper.vm.touching).toBe(false)
    expect(wrapper.vm.animating).toBe(false)
    expect(wrapper.vm.mousedown).toBe(false)
    wrapper.vm.startAnimate()
    expect(wrapper.vm.touching).toBe(true)
    expect(wrapper.vm.animating).toBe(true)
    expect(wrapper.vm.mousedown).toBe(true)
    wrapper.vm.mousedown = false
    timeout.handleTimeout().then(() => {
      expect(wrapper.vm.animating).toEqual(false)
      expect(wrapper.vm.mousedown).toEqual(false)
      done()
    })
  })

  it('endAnimate 当animating为true', () => {
    wrapper.vm.mousedown = true
    wrapper.vm.animating = true
    wrapper.vm.touching = true
    wrapper.vm.endAnimate()
    expect(wrapper.vm.mousedown).toEqual(false)
    expect(wrapper.vm.touching).toEqual(true)
  })

  it('endAnimate 当animating为false', () => {
    wrapper.vm.mousedown = true
    wrapper.vm.animating = false
    wrapper.vm.touching = true
    wrapper.vm.timeout.handleTimeout()
    expect(typeof wrapper.vm.timeout.timer).toEqual('number')
    wrapper.vm.endAnimate()
    expect(wrapper.vm.mousedown).toEqual(false)
    expect(wrapper.vm.touching).toEqual(false)
    expect(wrapper.vm.timeout.timer).toEqual(null)
  })

  afterEach(() => {
    // 废弃wrapper
    wrapper = null
  })
})