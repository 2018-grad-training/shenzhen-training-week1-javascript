class FizzBuzz {
  constructor(first) {
    this.first = first
  }

  say(number) {
    if (number % this.first === 0) {
      return 'Fizz'
    }

    return number.toString()
  }
}

module.exports = {
  FizzBuzz,
}
