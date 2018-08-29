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

    if (result.length) {
      return result
    }

    if (number % this.third === 0) {
      return 'Whizz'
    }

    return number.toString()
  }
}

module.exports = {
  FizzBuzz,
}
