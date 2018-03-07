/**
 * 测试src/index.js
 */

import Vue from 'vue'
import index from '../../../src/index.js'

describe('index.js', () => {
  // 测试testSafariBrower函数在不同系统不同浏览器下是否为预期结果
  const UA = {
    Chrome: {
      Mac: {
        expect: true,
        ua: 'User-Agent, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11'
      },
      Android: {
        expect: false,
        ua: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Mobile Safari/537.36'
      },
      iOS: {
        expect: true,
        ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      iPad: {
        expect: true,
        ua: 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
      }
    },
    Safari: {
      Mac: {
        expect: true,
        ua: 'User-Agent:Mozilla/5.0(Macintosh;U;IntelMacOSX10_6_8;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50'
      },
      iOS: {
        expect: true,
        ua: 'User-Agent:Mozilla/5.0(iPhone;U;CPUiPhoneOS4_3_3likeMacOSX;en-us)AppleWebKit/533.17.9(KHTML,likeGecko)Version/5.0.2Mobile/8J2Safari/6533.18.5'
      }
    }
  }
  for (let i in UA) {
    for (let j in UA[i]) {
      it(`测试testSafariBrower函数在${j}系统下的${i}浏览器执行情况`, () => {
        const isSafariBrower = index.testSafariBrower(UA[i][j].ua)
        expect(isSafariBrower).toBe(UA[i][j].expect)
      })
    }
  }
  // it('测试options存在以及不存在的情况', () => {
  //   Vue.use(index)
  //   const component = new Vue().$mount()
  // })
})