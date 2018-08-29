class FizzBuzz {
  constructor(first, second, third) {
    this.first = first
    this.second = second
    this.third = third
  }

  say(number) {
    let result = ''
    if (number % this.first === 0) {
      result = result.concat('Fizz')
    }

    if (number % this.second === 0) {
      result = result.concat('Buzz')
    }

    if (number % this.third === 0) {
      result = result.concat('Whizz')
    }

    return result || number.toString()
  }
}

module.exports = {
  FizzBuzz,
}
