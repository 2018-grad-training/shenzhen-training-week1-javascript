const { fibonacci } = require('./index')

it('should return 0 when calculate fibonacci(0)', () => {
  expect(fibonacci(0)).toBe(0)
})

it.skip('should return 0 when calculate fibonacci(0)', () => {
  expect(fibonacci(60)).toBe(1548008755920)
})
