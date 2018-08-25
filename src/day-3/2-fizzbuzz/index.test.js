const { fizzbuzz } = require('./index')

it('should say nothing when saying fizzbuzz(0)', () => {
  expect(fizzbuzz(0)).toEqual([])
})
