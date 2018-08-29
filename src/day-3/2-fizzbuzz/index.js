class FizzBuzz {
  constructor(first, second, third) {
    this.first = first
    this.second = second
    this.third = third
  }

  say(number) {
    if (number % this.first === 0) {
      return 'Fizz'
    }

    if (number % this.second === 0) {
      return 'Buzz'
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
