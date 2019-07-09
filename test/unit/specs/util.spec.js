import { Timeout, handleSafariBodyClickNotWorkEvent, listenClick } from '../../../src/util'

describe('util.js', () => {
  it('handleTimeout', (done) => {
    let timeout = new Timeout()
    timeout.handleTimeout().then((res) => {
      expect(res).toBe(true)
      done()
    })
  })
  it('handleClearTimeout', () => {
    let timeout1 = new Timeout()
    timeout1.handleTimeout()
    expect(typeof timeout1.timer).toBe('number')
    timeout1.handleClearTimeout()
    expect(timeout1.timer).toEqual(null)
  })
  it('handleSafariBodyClickNotWorkEvent safari', () => {
    document.querySelector('html').className = ''
    expect(document.querySelector('html').getAttribute('class')).toEqual('')
    handleSafariBodyClickNotWorkEvent(() => {}, true)
    let _html = document.querySelector('html')
    expect(_html.getAttribute('class')).toEqual('setCursor')
  })
  it('handleSafariBodyClickNotWorkEvent android', () => {
    document.querySelector('html').className = ''
    expect(document.querySelector('html').getAttribute('class')).toEqual('')
    handleSafariBodyClickNotWorkEvent(() => {}, false)
    let _html = document.querySelector('html')
    expect(_html.getAttribute('class')).toEqual('')
  })

  it('listenClick, obj.el.contains(e.target)', () => {
    let dom = document.createElement('div')
    let childDom = document.createElement('div')
    let othorDom = document.createElement('div')
    dom.appendChild(childDom)
    expect(dom.contains(childDom)).toEqual(true)
    console.log(dom)
    let bindingValue = () => true
    let obj = {
      el: dom,
      binding: {
        value: bindingValue
      }
    }
    let _e = {
      target: childDom
    }
    expect(listenClick(obj, _e)).toEqual(false)
    _e.target = othorDom
    expect(listenClick(obj, _e)).toEqual(bindingValue())
  })

  it('listenClick, e.target.dataset.outside', () => {
    let dom = document.createElement('div')
    let othorDom = document.createElement('div')
    othorDom.setAttribute('data-outside', 'true')
    let childDom = document.createElement('div')
    expect(dom.contains(othorDom)).toEqual(false)
    let bindingValue = () => true
    let obj = {
      el: dom,
      binding: {
        value: bindingValue
      }
    }
    let _e = {
      target: othorDom
    }
    expect(listenClick(obj, _e)).toEqual(false)
    _e.target = childDom
    expect(listenClick(obj, _e)).toEqual(true)
  })
})