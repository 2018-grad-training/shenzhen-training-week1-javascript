const { fibonacci } = require('./index')

it('should return 0 when calculate fibonacci(0)', () => {
  expect(fibonacci(0)).toBe(0)
})

it('should return 1 when calculate fibonacci(1)', () => {
  expect(fibonacci(1)).toBe(1)
})

it('should return 1 when calculate fibonacci(2)', () => {
  expect(fibonacci(2)).toBe(1)
})

it('should return 2 when calculate fibonacci(3)', () => {
  expect(fibonacci(3)).toBe(2)
})

it('should return 3 when calculate fibonacci(4)', () => {
  expect(fibonacci(4)).toBe(3)
})

it('should return 5 when calculate fibonacci(5)', () => {
  expect(fibonacci(5)).toBe(5)
})

it('should return 8 when calculate fibonacci(6)', () => {
  expect(fibonacci(6)).toBe(8)
})

it('should return 13 when calculate fibonacci(7)', () => {
  expect(fibonacci(7)).toBe(13)
})

it('should return 21 when calculate fibonacci(8)', () => {
  expect(fibonacci(8)).toBe(21)
})

it('should return 6765 when calculate fibonacci(20)', () => {
  expect(fibonacci(20)).toBe(6765)
})

xit('should return 102334155 when calculate fibonacci(40)', () => {
  expect(fibonacci(40)).toBe(102334155)
})
