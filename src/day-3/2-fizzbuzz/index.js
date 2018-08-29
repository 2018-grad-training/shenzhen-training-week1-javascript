class FizzBuzz {
  constructor(first) {
    this.first = first
  }

  say(number) {
    if (number % this.first === 0) {
      return 'Fizz'
    }

    if (number === 5) {
      return 'Buzz'
    }

    return number.toString()
  }
}

module.exports = {
  FizzBuzz,
}
