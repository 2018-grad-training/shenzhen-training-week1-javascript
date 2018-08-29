class FizzBuzz {
  constructor(first, second) {
    this.first = first
    this.second = second
  }

  say(number) {
    if (number % this.first === 0) {
      return 'Fizz'
    }

    if (number % this.second === 0) {
      return 'Buzz'
    }

    return number.toString()
  }
}

module.exports = {
  FizzBuzz,
}
