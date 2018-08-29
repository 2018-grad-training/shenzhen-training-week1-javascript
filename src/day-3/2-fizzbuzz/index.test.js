const { FizzBuzz } = require('./index')

let fizzbuzz
beforeEach(() => {
  fizzbuzz = new FizzBuzz(3, 5, 7)
})

it('should say 1 when saying fizzbuzz(1)', () => {
  expect(fizzbuzz.say(1)).toEqual('1')
})

it('should say Fizz when saying fizzbuzz(3)', () => {
  expect(fizzbuzz.say(3)).toEqual('Fizz')
})

it('should say 4 when saying fizzbuzz(4)', () => {
  expect(fizzbuzz.say(4)).toEqual('4')
})

it('should say Buzz when saying fizzbuzz(5)', () => {
  expect(fizzbuzz.say(5)).toEqual('Buzz')
})

it('should say Whizz when saying fizzbuzz(7)', () => {
  expect(fizzbuzz.say(7)).toEqual('Whizz')
})

it('should say Buzz when saying fizzbuzz(10)', () => {
  expect(fizzbuzz.say(10)).toEqual('Buzz')
})

it('should say FizzBuzz when saying fizzbuzz(15) which is the multiple of 3 and 5', () => {
  expect(fizzbuzz.say(15)).toEqual('FizzBuzz')
})
