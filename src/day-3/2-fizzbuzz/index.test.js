const { FizzBuzz } = require('./index')

let fizzbuzz
beforeEach(() => {
  fizzbuzz = new FizzBuzz('1')
})

it('should say 1 when saying fizzbuzz(1)', () => {
  expect(fizzbuzz.say(1)).toEqual('1')
})
