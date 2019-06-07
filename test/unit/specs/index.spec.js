/**
 * 测试src/index.js
 */

import Vue from 'vue'
import index from '../../../src/index.js'
import { testSafariBrower } from '../../../src/util'

describe('index.js', () => {
  it(`测试testSafariBrower函数在安卓的判断`, () => {
    const isSafariBrower = testSafariBrower('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Mobile Safari/537.36')
    expect(isSafariBrower).toBe(false)
  })
  it(`测试testSafariBrower函数在ios的判断`, () => {
    const isSafariBrower = testSafariBrower('User-Agent:Mozilla/5.0(iPhone;U;CPUiPhoneOS4_3_3likeMacOSX;en-us)AppleWebKit/533.17.9(KHTML,likeGecko)Version/5.0.2Mobile/8J2Safari/6533.18.5')
    expect(isSafariBrower).toBe(true)
  })
})