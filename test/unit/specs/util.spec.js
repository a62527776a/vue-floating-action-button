import { Timeout } from '../../../src/util'

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
})