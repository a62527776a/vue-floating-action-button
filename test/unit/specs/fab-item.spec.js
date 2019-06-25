import Vue from 'vue'
import { mount, createLocalVue } from 'vue-test-utils'
import index from '../../../src/index.js'
import Fab from '../../../src/fab.vue'
import FabItem from '../../../src/fab-item.vue'

describe('fab-item.vue', () => {
  const localVue = createLocalVue()
  localVue.use(index)
  let wrapper = null

  beforeEach(() => {
    // 初始化wrapper
    wrapper = mount(Fab, {
      localVue,
      slots: {
        default: [FabItem]
      }
    })
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  })

  afterEach(() => {
    // 废弃wrapper
    wrapper = null
  })
  it('handleTimeout', async () => {
    let resolve = await FabItem.methods.handleTimeout()
    expect(resolve).toBe(true)
  })
})