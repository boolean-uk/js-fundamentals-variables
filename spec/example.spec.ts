const example = require('../src/example.ts')

describe('Variables example', () => {
  it('Variables Example', () => {
    expect(example.a).toEqual(100)
    expect(example.b).toEqual('Tokyo')
  })
})
