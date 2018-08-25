const { fibonacci } = require('./index')

it('should return 0 when calculate fibonacci(0)', () => {
  expect(fibonacci(0)).toBe(0)
})
