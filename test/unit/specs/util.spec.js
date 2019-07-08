import { Timeout } from '../../../src/util'

describe('util.js', () => {
  it('handleTimeout', async () => {
    let timeout = new Timeout()
    let resolve = await timeout.handleTimeout()
    expect(resolve).toBe(true)
  })
  it('handleClearTimeout', async () => {
    let timeout1 = new Timeout()
    timeout1.handleTimeout()
    expect(typeof timeout1.timer).toBe('number')
    timeout1.handleClearTimeout()
    expect(timeout1.timer).toBeNull()
  })
})