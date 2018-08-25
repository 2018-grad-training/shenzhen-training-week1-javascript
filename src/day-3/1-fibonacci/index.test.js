const { fibonacci } = require('./index')

it('should return 0 when calculate fibonacci(0)', () => {
  expect(fibonacci(0)).toBe(0)
})

it('should return 1 when calculate fibonacci(1)', () => {
  expect(fibonacci(1)).toBe(1)
})
